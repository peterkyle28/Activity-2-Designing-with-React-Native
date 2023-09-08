import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'; 
import EntypoIcon from 'react-native-vector-icons/Entypo'; 
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'; 

const searchResultsData = [
  { id: '4', title: 'Featured News 1', url: 'https://www.example.com/news1' },
  { id: '5', title: 'Featured News 2', url: 'https://www.example.com/news2' },
  { id: '6', title: 'Featured News 3', url: 'https://www.example.com/news3' },
];

const GoogleSearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    setSearchResults(searchResultsData);
  };

  const renderSearchResult = ({ item }) => (
    <TouchableOpacity style={styles.searchResultItem} onPress={() => openLink(item.url)}>
      <Text style={styles.searchResultTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  const openLink = (url) => {
    console.log('Opening URL:', url);
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://logodownload.org/wp-content/uploads/2014/09/google-logo-1.png' }}
        style={styles.logo}
      />
      <TouchableOpacity style={styles.profileButton}>
        <Image
          source={{ uri: 'https://lh3.googleusercontent.com/a/ACg8ocL_eRRGiFx74vYySvdFi7RDExzs7vyAi5ixbddYD8QE=s288-c-no' }}
          style={styles.profileImage}
        />
      </TouchableOpacity>
      <View style={styles.searchBar}>
        <Icon name="search" size={40} color="#808080" style={styles.searchIcon} />
        <TextInput
          placeholder="Search Google"
          style={styles.input}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.iconContainer}>
        {/* Facebook */}
        <View style={styles.iconItem}>
          <FontAwesomeIcon name="facebook" size={40} color="#1877f2" style={styles.icon} />
          <Text style={styles.iconText}>Facebook</Text>
        </View>
        {/* YouTube */}
        <View style={styles.iconItem}>
          <FontAwesomeIcon name="youtube-play" size={40} color="#ff0000" style={styles.icon} />
          <Text style={styles.iconText}>YouTube</Text>
        </View>
        {/* Twitter */}
        <View style={styles.iconItem}>
          <EntypoIcon name="twitter" size={40} color="#1da1f2" style={styles.icon} />
          <Text style={styles.iconText}>Twitter</Text>
        </View>
        {/* Instagram */}
        <View style={styles.iconItem}>
          <MaterialCommunityIcon name="instagram" size={40} color="#e4405f" style={styles.icon} />
          <Text style={styles.iconText}>Instagram</Text>
        </View>
      </View>
      <FlatList
        data={searchResults}
        renderItem={renderSearchResult}
        keyExtractor={(item) => item.id}
        style={styles.searchResultsList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
    alignItems: 'center',
  },
  logo: {
    width: 280,
    height: 90,
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 100,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d5d5d5',
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  profileButton: {
    position: 'absolute',
    marginTop: 30,
    top: 10,
    right: 20,
    zIndex: 20,
  },
  profileImage: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    borderWidth: 0,
    outlineWidth: 0,
  },
  searchButton: {
    backgroundColor: '#4285f4',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  buttonText: {
    color: '#ffffff',
  },
  searchResultsList: {
    flex: 1,
  },
  searchResultItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#d5d5d5',
    paddingVertical: 10,
  },
  searchResultTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20,
  },
  iconItem: {
    alignItems: 'center',
  },
  icon: {
    marginBottom: 5,
  },
  iconText: {
    fontSize: 12,
  },
});

export default GoogleSearchScreen;
