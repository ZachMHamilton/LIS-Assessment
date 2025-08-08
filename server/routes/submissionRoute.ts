import { Router } from 'express';
import { createSubmissionController } from '../controllers/submissionController';
import type { SubmissionStore } from '../models/submissionStore';

export default function submissionRoute(store: SubmissionStore) {
  const router = Router();
  const controller = createSubmissionController(store);

  router.post("/add", (req, res) => controller.addSubmission(req, res));
  router.get("/get", (req, res) => controller.getSubmissions(req, res));

  return router;
}