import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Alert, TextInput, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';

// GoalInput component handles the input and addition of goals
function GoalInput(props) {
    // State to hold the entered goal text
    const [enteredGoalText, setEnteredGoalText] = useState('');

    // Handler for updating the entered goal text state
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    };

    // Handler for adding the goal
    function addGoalHandler() {
        props.onAddGoal(enteredGoalText); // Call the onAddGoal prop function passed from the parent
        setEnteredGoalText(''); // Clear the text input after adding the goal
    };

    return (
        <View style={styles.inputContainer}>
            {/* TextInput for entering goals */}
            <TextInput
                placeholder='Your goals'
                style={styles.textInput}
                onChangeText={goalInputHandler} // Call goalInputHandler on text change
                value={enteredGoalText} // Bind the input value to enteredGoalText state
            />
            {/* Button to add the goal */}
            <Button title='Add Goal' onPress={addGoalHandler} />
        </View>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    // Style for the input container
    inputContainer: {
        flexDirection: 'row', // Layout children in a row
        justifyContent: 'space-between', // Space out children evenly
        alignItems: 'center', // Align children to the center
        marginBottom: 24, // Margin at the bottom
        paddingBottom: 24, // Padding at the bottom
        borderBottomWidth: 1, // Border at the bottom
        borderBottomColor: '#cccccc' // Border color
    },

    // Style for the text input
    textInput: {
        borderWidth: 1, // Border width
        borderColor: '#cccccc', // Border color
        width: '70%', // Width of the text input
        marginRight: 8, // Margin to the right
        padding: 8, // Padding inside the input
    },
});
