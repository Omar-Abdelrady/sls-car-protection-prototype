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
  });
});
