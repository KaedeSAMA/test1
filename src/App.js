import { useState } from "react";
import "./App.css";

const Card = (props) => {
  const { title, content, data, hidden, id, setData, active } = props;
  const clickCard = () => {
    const newData = data.map((item) => {
      if (id === item.id) {
        return { ...item, active: !active };
      } else {
        return item;
      }
    });
    setData(newData);
  };
  if (props.useHidden && hidden) {
    return;
  } else {
    return (
      <div
        id="card"
        className={`border border-blue-300 shadow hover:bg-violet-600 ${
          active ? "bg-blue-700" : ""
        }`}
        onClick={() => clickCard()}
      >
        <p>{title}</p>
        <p>{content}</p>
      </div>
    );
  }
};

const App = () => {
  const [useHidden, setUseHidden] = useState(true);
  const [data, setData] = useState([
    {
      id: 0,
      title: "title1",
      content: "Some Card Content.",
      hidden: false,
      active: false,
    },
    {
      id: 1,
      title: "title2",
      content: "Some Card Content.",
      hidden: true,
      active: false,
    },
    {
      id: 2,
      title: "title3",
      content: "Some Card Content.",
      hidden: true,
      active: false,
    },
    {
      id: 3,
      title: "title4",
      content:
        "Some Long Long Long Long Long Long Long Long Long Long Card Content.",
      hidden: false,
      active: false,
    },
    {
      id: 4,
      title: "title5 is very long long long long long long long long",
      content: "Some Card Content.",
      hidden: false,
      active: false,
    },
    {
      id: 5,
      title: "title6",
      content: "Some Card Content.",
      hidden: false,
      active: false,
    },
  ]);

  const submitActive = () => {
    const newData = data.map((item) => {
      if (item.active === true) {
        console.log(item.id);
        return { ...item, active: false };
      } else {
        return item;
      }
    });
    setData(newData);
  };
  const allCard = (val) => {
    const newData = data.map((item) => {
      return { ...item, active: val };
    });
    setData(newData);
  };

  const searchHandler = (event) => {
    const newData = data.map((item) => {
      if (
        item.title.toLowerCase().indexOf(event.target.value.toLowerCase()) !==
          -1 ||
        item.content.toLowerCase().indexOf(event.target.value.toLowerCase()) !==
          -1
      ) {
        return { ...item, hidden: false };
      } else {
        return { ...item, hidden: true };
      }
    });
    setData(newData);
  };

  const sort = (val) => {
    if (val === "origin") {
      const newData = [...data].sort((a, b) => a.id - b.id);
      setData(newData);
    }
    if (val === "length") {
      const newData = [...data].sort((a, b) => a.title.length - b.title.length);
      setData(newData);
    }
  };
  return (
    <div>
      <h1 className="text-3xl">Welcome! -- ZhiLi Frontend Team</h1>
      <p>基础任务：</p>

      <ol className="list-decimal list-inside m-2">
        <li>将card抽象为一个React component</li>
        <li>使用Array.map函数展示所有的card</li>
        <li>添加一个按钮，在按下后切换是/否显示hidden为true的card</li>
        <li>
          使用flexbox，令card横向排列，并在一行显示不下后将card wrap到下一行
        </li>
        <li>使用flexbox，令card title居中显示</li>
        <li>利用tailwind css，为card添加阴影与圆角</li>
      </ol>

      <p>进阶任务：</p>
      <ol className="list-decimal list-inside m-2">
        <li>利用tailwind css为card加入一个hover特效，如hover时改变背景颜色</li>
        <li>
          多选并提交。用户在点击卡片后将卡片标为选中（如换一种背景颜色），再次点击后取消选中。在list头部，添加按钮。点击按钮后，console.log所有选中卡片在数组中的下标，并取消所有卡片的选中状态。
        </li>
        <li>
          添加一个全选按钮，应具有“全选”、“取消全选”这两个功能（这里的“全选”与上面的“选中”是一样的，均会在提交后被清除）
        </li>
        <li>
          添加一个文本框，在用户输入字符后，实时筛选card，只显示title或content中含有用户输入字符的card（忽略字母的大小写）
        </li>
        <li>
          添加排序按钮：按照title的length排序、按照数组下标顺序显示。按照（默认升序）
        </li>
      </ol>

      <p>注意：</p>
      <ul className="list-desc list-inside m-2">
        <li>保留container和card的边框</li>
        <li>
          card的“选中”状态应不受是否被隐藏的影响。也就是说，被选中的卡片在用户点击隐藏按钮而被隐藏有，应仍是被选中的
        </li>
        <li>不必在意页面是否美观</li>
      </ul>

      <hr className="my-10" />

      <p>Card List 请修改以下的代码</p>
      <button onClick={() => setUseHidden(!useHidden)}>
        点我决定是否隐藏值为true的card
      </button>
      <p>当前：{useHidden ? "隐藏" : "显示"}</p>
      <button onClick={() => submitActive()}>点我提交card</button>
      <hr />
      <button onClick={() => allCard(true)}>点我全选card</button>
      <br />
      <button onClick={() => allCard(false)}>点我取消全选card</button>
      <p>输入框⬇️</p>
      <input
        type="text"
        onChange={($event) => searchHandler($event)}
        className="bg-blue-100"
      />
      <br />
      <button onClick={() => sort("origin")}>点我按数组下标排序</button>
      <br />
      <button onClick={() => sort("length")}>点我按title长度排序</button>

      <div id="container" className="border m-5 p-3">
        {data.map((item) => (
          <Card
            data={data}
            title={item.title}
            content={item.content}
            active={item.active}
            id={item.id}
            key={item.id}
            hidden={item.hidden}
            useHidden={useHidden}
            setData={setData}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default App;
