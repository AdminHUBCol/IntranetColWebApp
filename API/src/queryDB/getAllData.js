const { connection } = require('../dbconnection');

const getAllData = async () => {
	const sql = `
	SELECT
    *
	FROM
    participantsHBTNAPI
    LEFT JOIN (
        SELECT
            participantId,
            productId,
            status,
      		spe_title,
            title as StatusTitle,
            startDate,
            average,
            createdAtTIMESTAMP,
            internalNote,
            studentNote,
            extraValue,
            skipProfessionalImpact,
            report_type_id,
            report_type_name,
            report_type_professional_impact,
            reporter_id,
            reporter_first_name,
            reporter_last_name,
            reporter_emai
        FROM
            (
                SELECT
                    *,
                    STR_TO_DATE(startDate, '%Y-%m-%d') AS allAcademicsStartDate
                FROM
                    statusLogHBTNAPI
                WHERE
                    startDate != ''
            ) AS allAcademics
            INNER JOIN (
                SELECT
                    participantId AS userId,
                    MAX(STR_TO_DATE(startDate, '%Y-%m-%d')) AS recentStartDate
                FROM
                    statusLogHBTNAPI
                WHERE
                    startDate != ''
                GROUP BY
                    participantId
            ) AS lastDates ON (
                allAcademics.allAcademicsStartDate = lastDates.recentStartDate
                AND allAcademics.participantId = lastDates.userId
            )
            LEFT JOIN (
                SELECT
                    *
                FROM
                    (
                        SELECT
                            intranetUserId AS userIdFromUserReports,
                            MAX(STR_TO_DATE(createdAt, '%Y-%m-%dT%T')) AS lastReportDate
                        FROM
                            userReportsHBTNAPI
                        WHERE
                            (
                                report_type_name like '%Withdrawal%'
                                or report_type_name like '%Dismissal%'
                                or report_type_name like '%Transfer status%'
                                or report_type_name like '%Passed away%'
                                or report_type_name like '%Leaving for Absence%'
                                or report_type_name like '%other%'
                            )
                        GROUP BY
                            intranetUserId
                    ) AS lastReports
                    INNER JOIN (
                        SELECT
                            *,
                            STR_TO_DATE(createdAt, '%Y-%m-%dT%T') AS createdAtTIMESTAMP
                        FROM
                            userReportsHBTNAPI
                    ) AS todos ON (
                        lastReports.userIdFromUserReports = todos.intranetUserId
                        AND lastReports.lastReportDate = todos.createdAtTIMESTAMP
                    )
            ) AS LastStatusLastReport ON (participantId = intranetUserId)
    ) AS ppHBTN ON (intranetUserId = participantId);
	`;

	return new Promise((resolve, reject) => {
		connection.query(sql, (error, results) => {
			if (error) {
				reject(error);
				//connection.end();
			}
			resolve(results);
			//connection.end();
		});
	});
}

module.exports = { getAllData };
