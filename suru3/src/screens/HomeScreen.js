/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  Dimensions,
  Platform,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeColors } from '../theme';
import { StatusBar } from 'expo-status-bar';
import { workoutCategories, workoutItems } from '../constants';
import Carousel from 'react-native-snap-carousel';
import WorkoutCard from '../components/workoutCard';
import { BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { MapPinIcon } from 'react-native-heroicons/solid';

const { width, height } = Dimensions.get('window');
const isIOS = Platform.OS === 'ios';
const statusBarHeight = isIOS ? 0 : StatusBar.currentHeight;

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState(1);

  return (
    <View style={styles.container}>
      <StatusBar style={isIOS ? 'auto' : 'background'} />

      <Image
        source={require('../assets/images/nepalBackground.png')}
        style={styles.backgroundImage}
      />

      <SafeAreaView style={styles.safeAreaView}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.avatarContainer}>
            <Image
              source={require('../assets/images/avatar.png')}
              style={styles.avatarImage}
            />
          </TouchableOpacity>
          <View style={styles.locationContainer}>
            <MapPinIcon size={25} color={themeColors.bgLight} />
            <Text style={styles.locationText}>Kathmandu, Nepal</Text>
          </View>
          <TouchableOpacity style={styles.bellIconContainer}>
            <BellIcon size={27} color={themeColors.textDark} />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchBarContainer}>
          <View style={styles.searchBar}>
            <TextInput
              placeholder="Search"
              style={styles.searchInput}
              placeholderTextColor={themeColors.textDark}
            />
            <TouchableOpacity style={styles.searchButton}>
              <MagnifyingGlassIcon size={25} strokeWidth={2} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Workout Categories */}
        <View style={styles.categoriesContainer}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={workoutCategories}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.categoriesContentContainer}
            renderItem={({ item }) => {
              const isActive = item.id === activeCategory;
              const activeTextClass = isActive
                ? styles.activeText
                : styles.inactiveText;
              const categoryStyle = isActive
                ? styles.activeCategory
                : styles.inactiveCategory;
              return (
                <TouchableOpacity
                  onPress={() => setActiveCategory(item.id)}
                  style={[styles.categoryButton, categoryStyle]}
                >
                  <Text style={[styles.categoryText, activeTextClass]}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </SafeAreaView>

      {/* Workout Cards */}
      <View style={styles.workoutCardsContainer}>
        <View style={styles.carouselContainer}>
          <Carousel
            data={workoutItems}
            renderItem={({ item }) => <WorkoutCard item={item} />}
            firstItem={1}
            loop={true}
            inactiveSlideScale={0.75}
            inactiveSlideOpacity={0.75}
            sliderWidth={width}
            itemWidth={width * 0.63}
            slideStyle={styles.carouselSlide}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.background,
  },
  backgroundImage: {
    height: height * 0.25,
    width: '100%',
    position: 'absolute',
    top: -5,
    opacity: 0.8,
  },
  safeAreaView: {
    flex: 1,
    marginTop: statusBarHeight,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 16,
  },
  avatarContainer: {
    borderRadius: 18,
    overflow: 'hidden',
  },
  avatarImage: {
    height: 36,
    width: 36,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 4,
    color: themeColors.textLight,
  },
  bellIconContainer: {
    padding: 8,
    borderRadius: 18,
    backgroundColor: themeColors.bgLight,
  },
  searchBarContainer: {
    marginHorizontal: 16,
    marginTop: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    backgroundColor: themeColors.background,
    borderRadius: 24,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 24,
  },
  searchInput: {
    padding: 16,
    flex: 1,
    fontWeight: '600',
    color: themeColors.textDark,
  },
  searchButton: {
    borderRadius: 24,
    backgroundColor: themeColors.primary,
    padding: 8,
  },
  categoriesContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  categoriesContentContainer: {
    overflow: 'visible',
  },
  categoryButton: {
    padding: 16,
    paddingHorizontal: 24,
    marginRight: 8,
    borderRadius: 24,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  activeCategory: {
    backgroundColor: themeColors.primary,
  },
  inactiveCategory: {
    backgroundColor: themeColors.inactive,
  },
  categoryText: {
    fontWeight: '600',
    color: themeColors.textDark,
  },
  activeText: {
    color: themeColors.textLight,
  },
  inactiveText: {
    color: themeColors.textDark,
  },
  workoutCardsContainer: {
    flex: 1,
    marginTop: 10,
    justifyContent: 'center',
  },
  carouselContainer: {
    overflow: 'visible',
  },
  carouselSlide: {
    display: 'flex',
    alignItems: 'center',
  },
});

export default HomeScreen;
