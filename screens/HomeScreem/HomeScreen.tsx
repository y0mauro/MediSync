import React, { useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import Header from "../../components/Header";
import SearchInput from "../../components/SearchInput";
import useDebouncedSearch from "../../hooks/useDebouncedSearch";
import mockList from "../../data/patients";
import HeaderList from "./components/HeaderList";
import PatientListView from "./components/PatientListView";

const HomeScreen = () => {
  const [searchText, setSearchText] = useState<string>("");
  const filteredPatients = useDebouncedSearch({
    searchText,
    delay: 200,
    data: mockList,
  });

  return (
    <SafeAreaView className="bg-blue-50 h-full items-center justify-center">
      <View className="px-4  ">
        <Header />
        <SearchInput searchText={searchText} setSearchText={setSearchText} />
        <HeaderList filteredPatients={filteredPatients} />
        <PatientListView
          filteredPatients={filteredPatients}
          searchText={searchText}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;