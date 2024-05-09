
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Streams {

	public static void main(String[] args) throws Exception {
		// List initalizing
		List<Integer> integers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14);
		List<String> colors = Arrays.asList("Red", "Green", "Blue", "Pink", "Brown");
		List<Double> doubles = Arrays.asList(1.0, 2.0, 3.0, 4.0, 5.0);
		
		getCountGreaterThan5(integers);
		getSquaredIntegers(integers);
		getMaxInt(integers);
		getUpperCase(colors);
		getUpperCaseAndSort(colors);
		isUnique(colors);
	}

	// Implement a function that takes a list of integers as input and returns a new
	// list containing the square of each element.
	private static List<Integer> getSquaredIntegers(List<Integer> list) {
		List<Integer> squaredInts = list.stream()
				.map(x -> x * x)
				.collect(Collectors.toList());
		System.out.println(squaredInts);
		return squaredInts;
		throw new UnsupportedOperationException("Unimplemented method 'getSquaredIntegers'");
	}

	// Find and print the count of strings that have length greater than 5.
	public static void getCountGreaterThan5(List<Integer> list) {
		long count = list.stream()
				.filter(x -> x.length() > 5)
				.count();

		System.out.println(count);
	}

	// Find the maximum element in a list of integers.
	private static int getMaxInt(List<Integer> list) {
		int max = list.stream()
				.mapToInt(Integer::intValue)
				.max()
				.getAsInt();
		return max;

	}

	// Concatenate all the strings in a list into a single string.
	public static String getUpperCase(List<String> list) {
		String oneString = list.stream().collect(Collectors.joining());
		return oneString;
	}

	// Convert each string to uppercase and then sort them in alphabetical order.
	public static List<String> getUpperCaseAndSort(List<String> list) {
		List<String> uppercaseSorted = list.stream()
				.map(x -> x.toUpperCase())
				.sorted()
				// DONT FORGET TO CALL COLLECTOR HERE!
				.collect(Collectors.toList());
		System.out.println(uppercaseSorted);
		return uppercaseSorted;
	}

	// Create a new list that contains only unique words (remove duplicates).
	public static List<String> isUnique(List<String> list) {

		List<String> isUnique = list.stream()
				.distinct()
				.collect(Collectors.toList());

		System.out.println(isUnique);
		return isUnique;
	}

}
