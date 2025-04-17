import { render, screen } from "@testing-library/react";
import App from "./App";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./api/QueryClient";

describe("App", () => {
  it("renders the App component", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    );
    expect(screen.getByText(/Tailwind is working!/i)).toBeInTheDocument();
  });
});
