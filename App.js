import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Alert, TextInput, ScrollView, FlatList, Pressable } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  // State to hold the list of course goals
  const [courseGoals, setCourseGoals] = useState([]);

  // Handler to add a new goal to the list
  function addGoalHandler(enteredGoalText) {
    // Check if the entered goal text is empty
    if (enteredGoalText === '') {
      alert("Enter a goal"); // Alert the user if no goal text is entered
    } else {
      // Update the course goals state by adding the new goal
      setCourseGoals((currentCourseGoals) => [
        ...currentCourseGoals,
        { text: enteredGoalText, id: Math.random().toString() }, // Each goal has a text and a unique id
      ]);
    }
  };

  // Handler to delete a goal from the list
  function deleteGoalHandler(id) {
    // Filter out the goal that matches the given id
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      {/* Component to input and add new goals */}
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        {/* FlatList to render the list of goals */}
        <FlatList
          data={courseGoals} // Data source for the list
          renderItem={(itemData) => {
            // Render each goal item
            return (
              <GoalItem
                text={itemData.item.text}
                onDeleteItem={() => deleteGoalHandler(itemData.item.id)} // Pass the delete handler with the goal id
              />
            );
          }}
          keyExtractor={(item) => item.id} // Key extractor to provide unique keys for each item
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Main container style
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  // Container style for the goals list
  goalsContainer: {
    flex: 5,
  },
});
