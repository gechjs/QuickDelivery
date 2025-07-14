package main

import (
	"fmt"
)

func main() {
	fmt.Println("Word Frequency:")
	result := WordFrequency("Hello, hello world")
	fmt.Println(result)

	fmt.Println("\nPalindrome Check:")
	fmt.Println(IsPalindrome("wow wow wow"))
}
