import React, { useState } from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import useRepositories from '../hooks/useRepositories';

import RepositoryItem from './RepositoryItem';
import { useHistory } from 'react-router-dom';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const Dropdown = ({ setSortBy }) => {
  return (
    <RNPickerSelect
      placeholder={{
        label: "Sort repositories...",
        value: null,
      }}
      onValueChange={(value) => setSortBy(value)}
      items={[
        { label: "Latest repositories", value: "CREATED_AT" },
        { label: "Highest rated repositories", value: "DESC" },
        { label: "Lowest rated repositories", value: "ASC" },
      ]}
    />
  );
};

export const RepositoryListContainer = ({ repositories, setSortBy }) => {
  const history = useHistory();
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  const ItemSeparator = () => <View style={styles.separator} />;

  const onSelect = (id) => {
    history.push(`/${id}`);
  };

  return (
    <FlatList
      ListHeaderComponent={() => <Dropdown setSortBy={setSortBy} />}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) =>
        <TouchableOpacity onPress={() => onSelect(item.id)}>
          <RepositoryItem item={item} />
        </TouchableOpacity>
      }
    />
  );
};

const RepositoryList = () => {
  const [sortBy, setSortBy] = useState("");
  console.log(sortBy);
  const { repositories } = useRepositories(sortBy);

  return <RepositoryListContainer repositories={repositories} setSortBy={setSortBy} />;
};

export default RepositoryList;