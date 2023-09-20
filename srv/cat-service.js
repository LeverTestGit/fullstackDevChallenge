const cds = require("@sap/cds");

module.exports = class DevChallengeService extends cds.ApplicationService {
	init() {
		return super.init();
	}

	async assignQuestionsToTest(Tests, keys, questionsCount) {
		if (questionsCount < 1) {
			return "At least the questionsCount should be 1.";
		}

		const { Questions } = cds.entities;
		const questions = await SELECT.from(Questions).where({ test_ID: null });
		if (!questions.length) {
			return "No questions without an test associated!";
		}

		let updated = 0;
		for (let index = 0; index < questions.length; index++) {
			await UPDATE(Questions)
				.set({ test_ID: keys.ID })
				.where({ ID: questions[index].ID });

			updated++;
			if (updated == questionsCount) {
				break;
			}
		}

		return `${updated} question(s) successfully added to the test!`;
	}
};
