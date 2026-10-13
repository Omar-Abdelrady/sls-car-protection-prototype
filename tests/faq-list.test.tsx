import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { FaqList } from "@/components/faq-list";

describe("FaqList", () => {
  it("opens one answer and exposes the state accessibly", () => {
    render(
      <FaqList
        items={[
          { question: "هل لازم أحجز؟", answer: "يفضل التواصل قبل الزيارة." },
          { question: "فين المكان؟", answer: "The View Promenade." },
        ]}
      />,
    );

    const firstQuestion = screen.getByRole("button", { name: "هل لازم أحجز؟" });
    expect(firstQuestion).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(firstQuestion);

    expect(firstQuestion).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("يفضل التواصل قبل الزيارة.")).toBeVisible();

    fireEvent.click(firstQuestion);

    expect(firstQuestion).toHaveAttribute("aria-expanded", "false");
    expect(screen.getByText("يفضل التواصل قبل الزيارة.")).not.toBeVisible();

    const secondQuestion = screen.getByRole("button", { name: "فين المكان؟" });
    fireEvent.click(firstQuestion);
    fireEvent.click(secondQuestion);

    expect(firstQuestion).toHaveAttribute("aria-expanded", "false");
    expect(secondQuestion).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("يفضل التواصل قبل الزيارة.").parentElement).toHaveAttribute("aria-hidden", "true");
    expect(screen.getByText("The View Promenade.").parentElement).toHaveAttribute("aria-hidden", "false");
  });
});
