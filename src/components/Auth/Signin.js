
const Signin = () => {
  const quest = [];
  return (
    <>
      <header className="head">
        <nav className="navigation">
          <figure>
            <img className="image" src="./svgs/logo.svg" alt="" />
          </figure>

          <article className="header__div">
            <h1 className="header-h1">New Questionnaire</h1>
          </article>

          <button className="btn">
            <span className="btn-span">Log In</span>
          </button>
        </nav>
      </header>

      <main>
        <form id="form" className="form">



          <article className="form-wrap">
            <article className="form-control">
              <label htmlFor="username">Question</label>
              <input
                type="text"
                id="username"
                placeholder="What do you want to ask?"
                autoComplete="off"
                className="enable"
              />
              <small>Error message</small>
            </article>
            <article className="line"></article>
            <article className="form-control">
              <label htmlFor="answer">Answer</label>
              <select className="select-input" name="position">
                <option value="" selected>
                  Short Answer
                </option>
              </select>
            </article>

            <article className="form-control">
              <input
                type="text"
                id="username"
                placeholder="Short answer text"
                autoComplete="off"
                className="disable"
                value={"Short answer text"}
                disabled
              />
            </article>
            <article className="line"></article>

            <article className="paginate-del">
              <article className="paginate">
                <span className="paginate-span">2 of 2</span>
              </article>
              <article className="del">
                <img className="image" src="./svgs/up.svg" alt="" />
                <img className="image" src="./svgs/down.svg" alt="" />
                <img className="image" src="./svgs/delete.svg" alt="" />
              </article>
            </article>
          </article>






         {quest.length > 0 && quest.map((item, index)=>{
         
         return (<article className="form-wrap">
            <article className="form-control">
              <label htmlFor="username">Question</label>
              <input
                type="text"
                id="username"
                placeholder="What do you want to ask?"
                autoComplete="off"
                className="enable"
              />
              <small>Error message</small>
            </article>
            <article className="line"></article>
            <article className="form-control">
              <label htmlFor="answer">Answer</label>
              <select className="select-input" name="position">
                <option value="" selected>
                  Short Answer
                </option>
              </select>
            </article>

            <article className="form-control">
              <input
                type="text"
                id="username"
                placeholder="Short answer text"
                autoComplete="off"
                className="disable"
                value={"Short answer text"}
                disabled
              />
            </article>
            <article className="line"></article>

            <article className="paginate-del">
              <article className="paginate">
                <span className="paginate-span">2 of 2</span>
              </article>
              <article className="del">
                <img className="image" src="./svgs/up.svg" alt="" />
                <img className="image" src="./svgs/down.svg" alt="" />
                <img className="image" src="./svgs/delete.svg" alt="" />
              </article>
            </article>
          </article>)})
}








          <article className="add-btn">
            <button type="submit">
              <img className="image" src="./svgs/plus.svg" alt="" />
              <span className="add-span">Add Question</span>
            </button>
          </article>

          <article className="save-btn">
            <button type="submit">
              <span className="save-span">Save & Share</span>
            </button>
          </article>
        </form>
      </main>
    </>
  );
};

export default Signin;
