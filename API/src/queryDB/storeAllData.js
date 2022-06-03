const { connection } = require('../dbconnection');

const storeAllData = async (obj) => {
	obj.forEach((participant) => {
		// console.log(participant.intranetUserId);

		//OBJ CONTAIN
		// name - lastName - endDate - startingDate - address - phoneNumber - createdAt
		//linkedInUrl - github - twitter - dateOfBirth - emergencyContactName - emergencyContactPhoneNumber
		// emergencyContactRelation - participantId -productId - StatusTitle - startDate - average
		// createdAtTIMESTAMP - internalNote - studentNote - extraValue - skipProfessionalImpact
		//report_type_id - report_type_professional_impact - reporter_id - reporter_first_name
		//reporter_last_name - reporter_emai

		//SUPERTABLE MISSING FIELDS
		//active - currentProgramSection - currentEmploymentStatus - currentCompanyName
		//currentSalary - grossIncome - currentTypeContract - contractStatus - workingStatusVerified
		// startingGracePeriodDate - collector - currentPaymentStatus - LastPaymentAmount
		// LastPaymentDate - NumberOfPaymentsDone

		const sql = `
		INSERT INTO participantsAllData (
			intranetUserId,
			currentCohortNumber,
			currentCohortId,
			currentCohortName,
			title,
			city,
			personalEmail,
			lastsignInAt,
			lastSyncUNIXTIME,
			status,
			spe_title,
			report_type_name,
		)
		VALUES(
			'${participant.intranetUserId}',
			'${participant.currentCohortNumber}',
			'${participant.currentCohortId}',
			'${participant.currentCohortName}',
			'${participant.title}',
			'${participant.city}',
			'${participant.personalEmail}',)
			'${participant.lastsignInAt}',)
			'${participant.lastSyncUNIXTIME}',)
			'${participant.status}',)
			'${participant.spe_title}',)
			'${participant.report_type_name}',)
		`;
	});

	const sql = 'INSERT INTO participantsAllData SET ?';
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

module.exports = { storeAllData };
