package main

import (
	"reflect"
	"testing"
)

func TestWordFrequency(t *testing.T) {
	input := "Hello, hello! How are you? Are you well?"
	expected := map[string]int{
		"hello": 2,
		"how":   1,
		"are":   2,
		"you":   2,
		"well":  1,
	}

	result := WordFrequency(input)
	if !reflect.DeepEqual(result, expected) {
		t.Errorf("WordFrequency(%q) = %v; want %v", input, result, expected)
	}
}

func TestIsPalindrome(t *testing.T) {
	tests := []struct {
		input    string
		expected bool
	}{
		{"A man, a plan, a canal: Panama", true},
		{"Was it a car or a cat I saw?", true},
		{"No lemon, no melon", true},
		{"Hello, world!", false},
		{"", true},                 
		{"a", true},                
		{"ab", false},              
		{"Able was I ere I saw Elba", true},
	}

	for _, test := range tests {
		got := IsPalindrome(test.input)
		if got != test.expected {
			t.Errorf("IsPalindrome(%q) = %v; want %v", test.input, got, test.expected)
		}
	}
}