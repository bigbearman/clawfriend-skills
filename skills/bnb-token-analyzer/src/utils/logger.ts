import type { LogLevel } from "../api/types.js";

/**
 * Numeric priority for each log level, used for filtering.
 * Lower numbers are more verbose.
 */
const LOG_LEVEL_PRIORITY: Record<LogLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
};

/**
 * Simple structured logger with configurable log level filtering.
 *
 * Messages below the configured threshold are silently discarded.
 * Output is written to `console` with a `[LEVEL]` prefix and ISO timestamp.
 *
 * @example
 * ```ts
 * const log = new Logger("info");
 * log.info("Server started", { port: 3000 });
 * log.debug("This will be suppressed");
 * ```
 */
export class Logger {
  private readonly level: LogLevel;
  private readonly threshold: number;

  constructor(level: LogLevel = "info") {
    this.level = level;
    this.threshold = LOG_LEVEL_PRIORITY[level];
  }

  /**
   * Log a debug-level message. Only emitted when log level is "debug".
   *
   * @param message - The log message
   * @param meta - Optional structured metadata to include
   */
  debug(message: string, meta?: Record<string, unknown>): void {
    throw new Error("Not implemented");
  }

  /**
   * Log an info-level message.
   *
   * @param message - The log message
   * @param meta - Optional structured metadata to include
   */
  info(message: string, meta?: Record<string, unknown>): void {
    throw new Error("Not implemented");
  }

  /**
   * Log a warning-level message.
   *
   * @param message - The log message
   * @param meta - Optional structured metadata to include
   */
  warn(message: string, meta?: Record<string, unknown>): void {
    throw new Error("Not implemented");
  }

  /**
   * Log an error-level message.
   *
   * @param message - The log message
   * @param meta - Optional structured metadata to include
   */
  error(message: string, meta?: Record<string, unknown>): void {
    throw new Error("Not implemented");
  }
}
