/**
 * Available log levels in order of severity.
 */
export type LogLevel = "debug" | "info" | "warn" | "error";

/**
 * Numeric priority for each log level (higher = more severe).
 */
const LOG_LEVEL_PRIORITY: Record<LogLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
};

/**
 * Simple logger with configurable minimum log level.
 *
 * Messages below the configured level are silently discarded.
 * Output is written to `console.log` (info/debug) or `console.error`
 * (warn/error) with a `[LEVEL]` prefix and ISO timestamp.
 */
export class Logger {
  private readonly prefix: string;
  private readonly minLevel: LogLevel;

  constructor(options?: { prefix?: string; minLevel?: LogLevel }) {
    this.prefix = options?.prefix ?? "cross-agent-arbitrage";
    this.minLevel = options?.minLevel ?? "info";
  }

  /**
   * Log a debug-level message.
   * @param message - The message to log
   * @param data - Optional structured data to include
   */
  debug(message: string, data?: unknown): void {
    this.log("debug", message, data);
  }

  /**
   * Log an info-level message.
   * @param message - The message to log
   * @param data - Optional structured data to include
   */
  info(message: string, data?: unknown): void {
    this.log("info", message, data);
  }

  /**
   * Log a warn-level message.
   * @param message - The message to log
   * @param data - Optional structured data to include
   */
  warn(message: string, data?: unknown): void {
    this.log("warn", message, data);
  }

  /**
   * Log an error-level message.
   * @param message - The message to log
   * @param data - Optional structured data to include
   */
  error(message: string, data?: unknown): void {
    this.log("error", message, data);
  }

  private log(level: LogLevel, message: string, data?: unknown): void {
    if (LOG_LEVEL_PRIORITY[level] < LOG_LEVEL_PRIORITY[this.minLevel]) {
      return;
    }

    const timestamp = new Date().toISOString();
    const formatted = `[${timestamp}] [${level.toUpperCase()}] [${this.prefix}] ${message}`;

    const writer = level === "warn" || level === "error" ? console.error : console.log;

    if (data !== undefined) {
      writer(formatted, data);
    } else {
      writer(formatted);
    }
  }
}
