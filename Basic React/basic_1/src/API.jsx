import React, { useEffect, useState } from "react";

function API() {
  const [users, setUsers] = useState([]);
  const [userLoading, setUserLoading] = useState(false);
  const [userError, setUserError] = useState("");
  const [posts, setPosts] = useState([]);
  const [postLoading, setPostLoading] = useState(false);
  const [postError, setPostError] = useState("");

  useEffect(() => {
    fetchUsers();
    fetchPosts();
  }, []);

  const fetchUsers = async () => {
    setUserLoading(true);

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
      setUserError("");
      setUserLoading(false);
    } catch (e) {
      setUserError("server Error occured");
      setUserLoading(false);
    }
  };
  const fetchPosts = async () => {
    setPostLoading(true);

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
      console.log(data);
      setPostError("");
      setPostLoading(false);
    } catch (e) {
      setPostError("server error occured");
      setPostLoading(false);
    }
  };

  return (
    <div
      style={{
        width: "600px",
        display: "flex",
        gap: "1rem",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h1>Users</h1>
        {userLoading && <h3>Loading...</h3>}
        {userError && <h3>{userError}</h3>}
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </div>
      <div>
        <h1>Posts</h1>
        {postLoading && <h3>Loading...</h3>}
        {postError && <h3>{postError}</h3>}
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </div>
    </div>
  );
}

export default API;
