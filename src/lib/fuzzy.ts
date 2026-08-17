// Collapses runs of the same character to one, so a typo'd double letter
// ("AurAlloc" vs "AuraAlloc") still lines up as the same string.
function collapseRepeats(value: string): string {
	return value.replace(/(.)\1+/g, '$1');
}

// Substring match: `query` must appear as a contiguous run inside `target`,
// after collapsing repeated letters on both sides. Earlier and shorter
// matches score higher, so tighter/closer matches rank first.
export function fuzzyScore(query: string, target: string): number | null {
	if (!query) return 0;

	const index = collapseRepeats(target).indexOf(collapseRepeats(query));
	if (index === -1) return null;

	return 1000 - index;
}
