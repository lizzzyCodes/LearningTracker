import java.io.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.stream.Collectors;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

// This program was creating to brush up on Java maps and lists
public class BankCards {
    public static void main(String[] args) throws FileNotFoundException {

        List<String> cardNumbers = Arrays.asList("3700 0000 0000 002", "5127 8809 9999 9990", "3700 0000 0100 018",
                "4xxxxxxxxxxxxxxx", "5xxxxxxxxxxxxxxx", "34xxxxxxxxxxxxx",
                "6xxxxxxxxxxxxxxx", "4xxxxxxx^^xxxxxxx", "5xxxxxxxxxxxxxxx", "3xxxxxxx%%xxxxx", "6445 6445 6445 6445",
                "6xxxxxxxxxxxxxxx", "434xxxxxxxxxxdxxx", "3xxxxxxxxxdxxxxx", "6xxxxxxxxxxxxxdxx", "3700 0000 0000 002",
                "5127 8809 9999 9990", "4035 5010 0000 0008", "8171 9999 2766 0000", "5019 5555 4444 5555",
                "3607 0500 0010 20", "370 0000 0000 002");
        List<String> expiryDates = Arrays.asList("03/2030", "03/2030", "03/2030", "03/2030", "03/2030", "03/2030",
                "03/2030", "00/1222", "002/2222");
        String expiry = "06/2024";

        // isExpired(expiry);
        sortCards(cardNumbers);
        assignCardIssuer("37xxx3xxxxxxxxxx");
        // isCardNumberValid("79927398713");
        // removeDuplicate(cardNumbers);
        // (isValidCardNumber("370 0000 0000 002"));

    }

    // create a function that removes duplicates from a string and returns a string
    // using streams
    public static List<String> removeDuplicate(List<String> list) {
        List<String> isUnique = list.stream()
                .distinct()
                .collect(Collectors.toList());
        return isUnique;

    }

    // function takes in a string and assigns card issuer
    public static String assignCardIssuer(String cardNumber) {
        cardNumber = cardNumber.replaceAll("\\s+", "");

        String issuer = "PROVIDE_CORRECT_CARD_NUMBER";
        String firstTwoChars = cardNumber.substring(0, 2);
        char firstChar = cardNumber.charAt(0);
        int length = cardNumber.length();

        switch (firstChar) {
            case '3':
                if (length == 15 && (firstTwoChars.equals("34") || firstTwoChars.equals("37"))) {
                    return "AMERICAN_EXPRESS";
                }
                break;
            case '4':
                if (length == 16) {
                    return "VISA";
                }
                break;
            case '5':
                if (length == 16) {
                    return "MASTER_CARD";
                }
                break;
            case '6':
                if (length == 16) {
                    return "DISCOVER";
                }
                break;
            case '8':
                if (length == 16) {
                    return "CHINAPAY";
                }
        }

        return issuer;
    }

    public static HashMap<String, List<String>> sortCards(List<String> list) {
        HashMap<String, List<String>> map = new HashMap<String, List<String>>();
        // loop through the list
        for (int i = 0; i < list.size(); i++) {
            String cardNumber = list.get(i);
            if (isValidCardNumber(cardNumber)) {
                String key = assignCardIssuer(cardNumber); // return AMEX, MS, VISA etc
                if (!map.containsKey(key)) {
                    List<String> listOfcards = new ArrayList<>(); // create a new list to append our value into
                    listOfcards.add(cardNumber); // add value into list
                    map.put(key, listOfcards); // key "amex " : list created
                } else {
                    List<String> existingList = map.get(key); // outputs the value so its returning the list we have
                    existingList.add(cardNumber);
                    map.put(key, existingList);
                }
            }

        }
        return map;
    }

    private static boolean isExpired(String date) {
        // verify that the date we are getting is valid as well using regex
        // {2} and {4} and /
        if (!date.matches("\\d{2}/\\d{4}")) {
            return false;
        }
        LocalDate currentDate = LocalDate.now();
        int currentMonth = currentDate.getDayOfMonth(); // it retrieved an int // 5
        int currentYear = currentDate.getYear(); // it retrieves an int // 2024
        // split the date .. and return
        String[] expiryDate = date.split("/");
        int expiryMonth = Integer.parseInt(expiryDate[0]); // 03
        int expiryYear = Integer.parseInt(expiryDate[1]); // 2024

        return ((expiryYear > currentYear && expiryMonth > currentMonth)
                || currentYear == expiryYear && (expiryMonth > currentMonth));
        // edge case what if they are the same years?

    }

    // an enum is like an object
    public enum CardIssuer {
        VISA,
        AMERICAN_EXPRESS,
        MASTERCARD,
        DISCOVER,
        ERROR

    };

    public static boolean isNumber(String cardNumber) {
        for (int i = 0; i < cardNumber.length(); i++) {

            if (!Character.isDigit(cardNumber.charAt(i))) { // Charater.isDigit
                return false;
            }
        }
        return true;
    }

    // helper function to validate length is 15, 16 and are all numbers
    public static boolean isValidCardNumber(String cardNumber) {
        cardNumber = cardNumber.replaceAll("\\s+", "");
        return (cardNumber.length() == 15 ^ cardNumber.length() == 16 && isNumber(cardNumber));
    }

    public static String getCardIssuer(String cardNumber) {
        String issuer = "PLEASE PROVIDE A VALID CARD NUMBER";
        if (!isValidCardNumber(cardNumber)) {
            return issuer;
        }

        char firstChar = cardNumber.charAt(0); // to compare char with .equals char needs to be converted to string
        String firstCharAsString = String.valueOf(firstChar); // converting char to string
        String firstTwoChars = cardNumber.substring(0, 2);
        int stringLength = cardNumber.length();

        if (stringLength == 15 && (firstTwoChars.equals("34")) || (firstTwoChars.equals("37"))) {
            issuer = "AMERICAN_EXPRESS";

        } else if (firstCharAsString.equals("5") && stringLength == 16) {
            issuer = "MASTERCARD";

        } else if (firstCharAsString.equals("6") && stringLength == 16) {
            issuer = "DISCOVER";
        } else if (firstCharAsString.equals("4") && stringLength == 16) {
            issuer = "VISA";
        }

        return issuer;
    }

    // create a function that validates the card is valid using Luhn algorithm
    public static boolean isCardNumberValid(String cardNumber) {
        int totalSum = 0; // keeep track of product
        int product = 0; // product is the number * number
        for (int i = cardNumber.length() - 1; i >= 0; i--) {
            if (i % 2 == 1) {
                product = Character.getNumericValue(cardNumber.charAt(i)) * 2;
                if (product > 9) {
                    // split the string and add them
                    totalSum += product / 10;
                    totalSum += product % 10;

                    // split the number to add
                } else {
                    // sum+=product
                    totalSum += product;
                }

            } else {
                totalSum += Character.getNumericValue(cardNumber.charAt(i));
            }

        }

        return totalSum % 10 == 0;
    }
}

