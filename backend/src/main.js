import { web } from "./application/web.js";
import { logger } from "./application/logging.js";

web.listen(7184, () => {
  logger.info("Server is running on port 5000");
});
