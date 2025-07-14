package main

import (
	"strings"
	"unicode"
)

// WordFrequency counts how often each word appears, ignoring case and punctuation
func WordFrequency(text string) map[string]int {
	wordCount := make(map[string]int)

	// Normalize the text: lowercase and remove punctuation
	normalized := strings.Map(func(r rune) rune {
		if unicode.IsLetter(r) || unicode.IsSpace(r) {
			return unicode.ToLower(r)
		}
		return -1 // skip non-letter, non-space
	}, text)

	// Split into words
	words := strings.Fields(normalized)

	// Count frequency
	for _, word := range words {
		wordCount[word]++
	}

	return wordCount
}

// IsPalindrome checks if the text is a palindrome (ignores punctuation and case)
func IsPalindrome(text string) bool {
	word := ""
	for _, r := range text {
		if unicode.IsLetter(r) || unicode.IsDigit(r) {
			word += string(unicode.ToLower(r))
		}
	}

	left := 0
	right := len(word) - 1

	for left < right {
		if word[left] != word[right] {
			return false
		}
		left++
		right--
	}

	return true
}
