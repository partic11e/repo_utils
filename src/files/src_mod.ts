import { createTemplate } from "../create_template.ts";
import type { PackageProps, PackagePropsPath } from "../types/mod.ts";

export const srcModTs = createTemplate<PackagePropsPath, PackageProps>`/**
 * This file exports the public API features of the intv8 ${"pkg.name"} package.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

export * from "./types/mod.ts";
export * from "./exceptions/mod.ts";
export * from "./constants.ts";
export * from "./version.ts";
`;
