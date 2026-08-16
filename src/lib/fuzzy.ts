// Subsequence fuzzy match: every character of `query` must appear in `target`,
// in order, but not necessarily contiguous. Consecutive matches score higher,
// so "aal" ranks "auraalloc" above a scattered match of the same letters elsewhere.
export function fuzzyScore(query: string, target: string): number | null {
	if (!query) return 0;

	let queryIndex = 0;
	let score = 0;
	let consecutive = 0;

	for (let i = 0; i < target.length && queryIndex < query.length; i++) {
		if (target[i] === query[queryIndex]) {
			score += 1 + consecutive;
			consecutive++;
			queryIndex++;
		} else {
			consecutive = 0;
		}
	}

	return queryIndex === query.length ? score : null;
}
