"use client";

// ** React imports
import React, { ReactElement } from "react";
import { twMerge } from "tailwind-merge";

const Container = ({
  show_back_button,
  custom_classes,
  children,
}: {
  show_back_button?: boolean;
  custom_classes?: string;
  children: ReactElement | ReactElement[];
}) => {
  return (
    <>
      <main
        className={twMerge(
          "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen",
          show_back_button ? "relative" : "",
          custom_classes
        )}
      >
        {show_back_button && (
          <section className="absolute -left-12 top-0 hidden cursor-pointer md:block">
            Back
          </section>
        )}
        {children}
      </main>
    </>
  );
};

export default Container;
