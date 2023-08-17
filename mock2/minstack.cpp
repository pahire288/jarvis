#include <iostream>
#include <string>
#include <curlpp/cURLpp.hpp>
#include <curlpp/Easy.hpp>
#include <curlpp/Options.hpp>

// Function to perform a Google search
std::string performGoogleSearch(const std::string& query) {
    std::ostringstream response;

    try {
        // Initialize cURLpp
        curlpp::Cleanup cleanup;
        curlpp::Easy request;

        // Set the search URL
        std::string searchUrl = "https://www.google.com/search?q=" + query;
        request.setOpt(curlpp::options::Url(searchUrl));

        // Set up the response callback
        request.setOpt(curlpp::options::WriteStream(&response));

        // Perform the request
        request.perform();
    }
    catch (curlpp::RuntimeError& e) {
        std::cerr << "Error: " << e.what() << std::endl;
    }
    catch (curlpp::LogicError& e) {
        std::cerr << "Error: " << e.what() << std::endl;
    }

    return response.str();
}

int main() {
    std::string query;
    std::cout << "Enter your search query: ";
    std::getline(std::cin, query);

    std::string searchResult = performGoogleSearch(query);
    std::cout << "Search Result: " << std::endl;
    std::cout << searchResult << std::endl;

    return 0;
}
