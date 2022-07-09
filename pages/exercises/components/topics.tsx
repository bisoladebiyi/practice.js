import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../../../styles/Timeline.module.css";
import { TopicTypes } from "../../../types";

interface Props {
  topics?: TopicTypes[];
  subject: string;
}

const Topics: React.FC<Props> = ({ topics, subject }) => {
  const [style, setStyle] = useState("");
  useEffect(() => {
    if (subject == "javascript") {
      setStyle("bg-amber-200 text-amber-500");
    } else if (subject == "typescript") {
      setStyle("bg-blue-200 text-blue-600");
    } else {
      setStyle("bg-blue-100 text-blue-400");
    }
  }, []);
  return (
    <div className="w-full bg-gray-50 py-10 rounded-md">
      <div className={`w-11/12 mx-auto ${styles.timeline}`}>
        {topics?.map((topic, index) => (
          <Link
            key={index}
            href="[subject]/[id]"
            as={`${subject}/${topic.id}`}
            passHref
          >
            <div
              className={`${topic.position === "right" ? styles.right : styles.left} w-1/2 cursor-pointer`}
              >
              <p
                className={`text-2xl font-bold p-5 rounded-md bg-opacity-50 ${
                  topic.position === "right" ? style : "text-light-purp bg-purp bg-opacity-20"
                }`}
              >
                {topic.topic}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topics;
