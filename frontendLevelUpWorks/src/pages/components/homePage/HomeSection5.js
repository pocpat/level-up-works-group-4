import { React, useState, useEffect } from "react";
import styles from "./HomeSection5.module.css";
import "./HomeMain.css";
import Star from "../../../src-assets/Home/Star only copy.png";
import HomeSection4 from "./HomeSection4";

const HomeSection5 = ({ textIndex }) => {
  return (
    <>
      {/* <p>Current textIndex: {textIndex}</p> */}
      {textIndex === 3 && (
        <div className={styles.containerS5}>
          <article className={styles.articleS5title}>
            <h4>Enhance key competencies</h4>
            <br></br>
            <p>
              The programme enhances capabilities of students in the 5 Key
              Competencies identified in the New Zealand Curriculum:
            </p>
          </article>

          <section className={styles.logoTextS5}>
            <article
              className={styles.textS5}
              style={{ marginBottom: "0.1rem" }}
            >
              <h4>
                <img src={Star} alt="" />
                THINKING
              </h4>
              <p>
                In particular the programme focused on problem solving, design
                thinking and computational thinking.{" "}
              </p>

              <h4>
                <img src={Star} alt="" />
                DISCERNING CODES
              </h4>
              <p>
                Analysing language, symbols, and texts in order to understand
                and make sense of the codes in which knowledge is expressed.
              </p>

              <h4>
                <img src={Star} alt="" />
                SELF-MANAGEMENT
              </h4>
              <p>
                Projects and challenges are designed to motivate students to
                explore and experiment with self-motivation{" "}
              </p>

              <h4>
                <img src={Star} alt="" />
                RELATIONSHIPS WITH PEERS
              </h4>
              <p>
                The programme is designed with unplugged sessions where students
                interact in a range of different situations, including things
                like being able to listen well, recognise different points of
                view, and share ideas.{" "}
              </p>

              <h4>
                <img src={Star} alt="" />
                PARTICIPATION AND COLLABORATION
              </h4>
              <p>
                The programme encourages students to be involved in communities,
                such as family, whānau, school, and contribute and make
                connections with other people
              </p>
            </article>
          </section>
        </div>
      )}
      {textIndex === 1 && (
        <div className={styles.containerS5}>
          <article className={styles.articleS5title}>
            <h4>Interlinking Pathways</h4>
            <br></br>
            <p>
              This programme gives us 5 important interlinking Learning
              Pathways.
            </p>
          </article>

          <section className={styles.logoTextS5}>
            <article
              className={styles.textS5}
              style={{ marginBottom: "0.1rem" }}
            >
              <h4>
                <img src={Star} alt="" />
                COMPUTATIONAL THINKING
              </h4>
              <p>
                Within the programme the students are enabled to express
                problems and form solutions that will be designed so a computer
                can be used to create diverse and encapsulating applications.
              </p>

              <h4>
                <img src={Star} alt="" />
                DEVELOPING DIGITAL OUTCOMES
              </h4>
              <p>
                This programme is designed to strengthen the outcomes of each
                students personally to form strong applications.
              </p>

              <h4>
                <img src={Star} alt="" />
                DESIGNING PROCESSED OUTCOMES
              </h4>
              <p>
                Students will be taught the ways of how outcomes are processed,
                thought about, and produced.
              </p>

              <h4>
                <img src={Star} alt="" />
                DEVELOP VISUAL AND SOCIAL COMMUNICATIONS
              </h4>
              <p>
                Students will learn to design visually pleasing applications
                used to both keep the user aware of what is happening on the
                screen.
              </p>

              <h4>
                <img src={Star} alt="" />
                STRONG TECHNOLOGICAL PRACTICES
              </h4>
              <p>
                The programme will show students the best practices to think and
                solve the problems brought on by using technology.
              </p>
            </article>
          </section>
        </div>
      )}
      {textIndex === 2 && (
        <div className={styles.containerS5}>
          <article className={styles.articleS5title}>
            <h4>Expands Digital Knowledge Base</h4>
            <br></br>
            <p>
              This programme gives you the 5 major capabilities to be confident
              in Digital Technologies.
            </p>
          </article>

          <section className={styles.logoTextS5}>
            <article
              className={styles.textS5}
              style={{ marginBottom: "0.1rem" }}
            >
              <h4>
                <img src={Star} alt="" />
                PROBLEM SOLVING
              </h4>
              <p>
                The programme challenges are designed to think around multiple
                issues and challenges the way students interact with computers
                and other related technology.
              </p>

              <h4>
                <img src={Star} alt="" />
                DECISION-MAKING
              </h4>
              <p>
                The programme uses technology to make the lives of many people
                happier through the decisions made when creating digital
                applications.
              </p>

              <h4>
                <img src={Star} alt="" />
                CONFIDENCE
              </h4>
              <p>
                When having the skills to manipulate the applications and
                learning to use it brings self-confidence into your life.
              </p>

              <h4>
                <img src={Star} alt="" />
                HIGHER SELF-EXPECTATIONS
              </h4>
              <p>
                This programme develops students to think the best of themselves
                to bring higher expectations to their learning and lives as
                young adults.
              </p>

              <h4>
                <img src={Star} alt="" />
                COHERENCE
              </h4>
              <p>
                This programme offers all students a broader education that
                makes links within and across learning areas.
              </p>
            </article>
          </section>
        </div>
      )}
      {textIndex === 4 && (
        <div className={styles.containerS5}>
          <article className={styles.articleS5title}>
            <h4>IR4.0</h4>
            <br></br>
            <p>
              Designed with IT industry experts, the programme develops the
              students to find applicable jobs and careers in the Fourth
              Industrial Revolution. (IR4.0)
            </p>
          </article>

          <section className={styles.logoTextS5}>
            <article
              className={styles.textS5}
              style={{ marginBottom: "0.1rem" }}
            >
              <h4>
                <img src={Star} alt="" />
                LEARNING TO LEARN
              </h4>
              <p>
                The programme will set challenges at the end of every project to
                encourage students to explore and learn how to learn.
              </p>

              <h4>
                <img src={Star} alt="" />
                COMMUNITY ENGAGEMENT
              </h4>
              <p>
                The programme encourages students to be involved in the
                communities, such as family, friends, and in school, to
                contribute and make connections with other people.
              </p>

              <h4>
                <img src={Star} alt="" />
                CULTURAL DIVERSITY
              </h4>
              <p>
                This programme is designed in New Zealand and reflects NZ's
                cultural diversity.
              </p>

              <h4>
                <img src={Star} alt="" />
                INCLUSION
              </h4>
              <p>
                In particular the programme is designed with acknowledgement to
                the student's identities and talents, allowing them to be
                creative to their personal ability.
              </p>

              <h4>
                <img src={Star} alt="" />
                FUTURE FOCUS
              </h4>
              <p>
                The programme leads students to explore future themes such as
                artificial intelligence and augmented reality.
              </p>
            </article>
          </section>
        </div>
      )}
    </>
  );
};

export default HomeSection5;
