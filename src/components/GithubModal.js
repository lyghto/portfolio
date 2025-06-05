import React, { useEffect, useState } from "react";

const GithubModal = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/github-john-doe")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div
      className="modal fade"
      id="githubModal"
      tabIndex="-1"
      aria-labelledby="githubModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content bg-dark text-light">
          <div className="modal-header border-secondary">
            <h5 className="modal-title" id="githubModalLabel">
              Mon profil GitHub
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Fermer"
            ></button>
          </div>

          <div className="modal-body">
            {user ? (
              <div className="d-flex gap-4">
                <img
                  src={user.avatar_url}
                  alt="avatar"
                  width="140"
                  height="140"
                  style={{ borderRadius: "50%" }}
                />
                <div>
                  <p>
                    <strong>
                      <a
                        href={user.html_url}
                        className="text-info"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {user.name || user.login}
                      </a>
                    </strong>
                  </p>
                  <p>{user.bio}</p>
                  <ul className="list-unstyled">
                    <li>📦 Repositories : {user.public_repos}</li>
                    <li>👥 Followers : {user.followers}</li>
                    <li>➡️ Following : {user.following}</li>
                  </ul>
                </div>
              </div>
            ) : (
              <p>Chargement...</p>
            )}
          </div>

          <div className="modal-footer border-secondary">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubModal;