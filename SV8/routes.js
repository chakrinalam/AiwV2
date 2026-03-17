import express from 'express';

const router = express.Router();

import { router as routerFromCertificates } from "./Certificates/routes.js";

router.use("/Certificates", routerFromCertificates);

export { router };