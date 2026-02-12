/**
 * IMS CONTEXT DEFINITION
 * =======================
 *
 * Defines the Lit Context for the IMS singleton instance.
 */

import { createContext } from "@lit/context";
import type { Ims } from "../utils/IMS.js";

export const IMSContext = createContext<Ims | null>(null);

export default IMSContext;
