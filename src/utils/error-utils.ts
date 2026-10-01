export function getErrorMessage(error: unknown): string {
    if (error instanceof Error) {
        return error.message;
    }
    return String(error);
}

export function isError(error: unknown): error is Error {
    return error instanceof Error;
}

export function formatErrorWithStack(error: unknown): string {
    if (error instanceof Error && error.stack) {
        return error.stack;
    }
    return getErrorMessage(error);
}
