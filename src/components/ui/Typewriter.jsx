import { useState, useEffect } from "react";

const roles = [
  "Full Stack Developer",
  "React Specialist",
  "UI/UX Enthusiast",
  "Problem Solver",
  "Tech Innovator",
];

export const TypewriterText = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRoleIndex];
    let typingSpeed = isDeleting ? 40 : 100;

    if (!isDeleting && currentText === role) {
      typingSpeed = 2000; // Pause briefly after finishing typing
      const timeout = setTimeout(() => setIsDeleting(true), typingSpeed);
      return () => clearTimeout(timeout);
    }
    if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      typingSpeed = 500; // Pause before starting the next word
      const timeout = setTimeout(() => {}, typingSpeed);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setCurrentText(
        isDeleting
          ? role.substring(0, currentText.length - 1)
          : role.substring(0, currentText.length + 1),
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <>
      <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">
        {currentText}
      </span>
      <span className="cursor-blink text-primary ml-1 font-semibold">|</span>
    </>
  );
};
