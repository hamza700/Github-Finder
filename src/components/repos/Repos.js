import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RepoItem from './Repoitem';

export const Repos = ({ repos }) => {
  return repos.map((repo) => <RepoItem repo={repo} key={repo.id} />);
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
