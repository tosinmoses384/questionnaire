import { useState } from "react";

const Signin = () => {
  const [quest, setQuest] = useState([
    {
      askQues: "1",
      value: "value1",
    },
  ]);
  const [total, setTotalCount] = useState(1);
  const [questionState, setQuestionState] = useState("New Questionnaire");
  const [isTrue, setIsTrue] = useState(false);
  const [isEdit, setIsEdit] = useState(true);

  const editQuestionnaire = () => {
    setIsEdit(false);
    setIsTrue(true);
  };

  const stopEdit = () => {
    setIsEdit(true);
    setIsTrue(false);
  };

  const updateQuestionnaire = (e) => {
    e.preventDefault();
    setQuestionState(e.target.value);
  };

  const addQuestion = () => {
    let high = 0;
    setQuest((prev) => {
      for (let index = 0; index < prev.length; index++) {
        high =
          parseInt(prev[0].askQues) > parseInt(prev[index].askQues)
            ? parseInt(prev[0].askQues)
            : parseInt(prev[index].askQues);
      }
      const highest = high + 1;
      setTotalCount(highest);

      return [
        ...prev,
        {
          askQues: `${highest}`,
          value: `value${highest}`,
        },
      ];
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    const findInd = quest.map((item, index) => {
      return {
        ...item,
        name,
        value: name === item.askQues ? value : item.value,
      };
    });
    setQuest(findInd);
  };

  const submitFunc = (e) => {
    e.preventDefault();

    console.log(quest);
  };

  const firstIndex = quest?.filter((item, index) => item.askQues === "1");

  const OtherIndexes = quest?.filter((item, index) => item.askQues !== "1");

  const removeItem = (index) => {
    const itemId = quest.filter((item, i) => item.askQues !== index);
    setQuest(itemId);
  };

  return (
    <>
      <header className="head">
        <nav className="navigation">
          <figure>
            <img className="image" src="./svgs/logo.svg" alt="logo" />
          </figure>

          <article className="header__div">
            {isTrue && (
              <>
                <input
                  type="text"
                  className="headerInp"
                  name="edit"
                  value={questionState}
                  onChange={updateQuestionnaire}
                />
                <span onClick={stopEdit} className="space-span">
                  &nbsp; &nbsp;Save
                </span>
              </>
            )}
            {isEdit && (
              <h1 onClick={editQuestionnaire} className="header-h1">
                {questionState}
              </h1>
            )}
          </article>

          <button className="btn">
            <span className="btn-span">Log In</span>
          </button>
        </nav>
      </header>

      <main>
        <form id="form" className="form" onSubmit={submitFunc}>
          {firstIndex?.length > 0 &&
            firstIndex?.map((item, index) => {
              return (
                <article key={index} className="form-wrap">
                  <article className="form-control">
                    <label htmlFor="askQues">Question</label>
                    <input
                      type="text"
                      id="askQues"
                      placeholder="What do you want to ask?"
                      autoComplete="off"
                      className="enable"
                      name={item.askQues}
                      value={item.value}
                      onChange={handleInputChange}
                    />
                    <small>Error message</small>
                  </article>
                  <article className="line"></article>
                  <article className="form-control">
                    <label htmlFor="answer">Answer</label>
                    <select className="select-input" name="position">
                      <option value="">Short Answer</option>
                    </select>
                  </article>

                  <article className="form-control">
                    <input
                      type="text"
                      placeholder="Short answer text"
                      autoComplete="off"
                      className="disable"
                      disabled
                    />
                  </article>
                  <article className="line"></article>

                  <article className="paginate-del">
                    <article className="paginate">
                      <span className="paginate-span">
                        {item.askQues} of {total}
                      </span>
                    </article>
                    <article className="del">
                      <img className="image" src="./svgs/up.svg" alt="arrow" />
                      <img
                        className="image"
                        src="./svgs/down.svg"
                        alt="arrow"
                      />
                      <img
                        onClick={() => removeItem(item.askQues)}
                        className="image"
                        src="./svgs/delete.svg"
                        alt="delete"
                      />
                    </article>
                  </article>
                </article>
              );
            })}

          {OtherIndexes?.length > 0 &&
            OtherIndexes?.map((item, index) => {
              return (
                <article key={index} className="form-wrap">
                  <article className="form-control">
                    <label htmlFor="username">Question</label>
                    <input
                      type="text"
                      id="username"
                      placeholder="What do you want to ask?"
                      autoComplete="off"
                      className="enable"
                      name={item.askQues}
                      value={item.value}
                      onChange={handleInputChange}
                    />
                    <small>Error message</small>
                  </article>
                  <article className="line"></article>
                  <article className="form-control">
                    <label htmlFor="answer">Answer</label>
                    <select className="select-input" name="position">
                      <option value="">Short Answer</option>
                    </select>
                  </article>

                  <article className="form-control">
                    <input
                      type="text"
                      id="username"
                      placeholder="Short answer text"
                      autoComplete="off"
                      className="disable"
                      disabled
                    />
                  </article>
                  <article className="line"></article>

                  <article className="paginate-del">
                    <article className="paginate">
                      <span className="paginate-span">
                        {item.askQues} of {total}
                      </span>
                    </article>
                    <article className="del">
                      <img className="image" src="./svgs/up.svg" alt="arrow" />
                      <img
                        className="image"
                        src="./svgs/down.svg"
                        alt="arrow"
                      />
                      <img
                        onClick={() => removeItem(item.askQues)}
                        className="image"
                        src="./svgs/delete.svg"
                        alt="delete"
                      />
                    </article>
                  </article>
                </article>
              );
            })}
          <article className="add-btn">
            <button type="button" onClick={addQuestion}>
              <img className="image" src="./svgs/plus.svg" alt="add" />
              <span className="add-span">Add Question</span>
            </button>
          </article>

          <article className="save-btn">
            <button type="submit" disabled={quest.length === 0}>
              <span className="save-span">Save & Share</span>
            </button>
          </article>
        </form>
      </main>
    </>
  );
};

export default Signin;
