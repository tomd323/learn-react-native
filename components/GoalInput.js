import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Alert, TextInput, Image, ScrollView, FlatList, Modal } from 'react-native';
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
        // Modal component to display the input form
        <Modal visible={props.visible} animationType='slide'>
            <StatusBar />
            <View style={styles.inputContainer}>
                {/* Image above the input field */}
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                {/* TextInput for entering goals */}
                <TextInput
                    placeholder='Your goals'
                    style={styles.textInput}
                    onChangeText={goalInputHandler} // Call goalInputHandler on text change
                    value={enteredGoalText} // Bind the input value to enteredGoalText state
                />
                {/* Container for the buttons */}
                <View style={styles.buttonContainer}>
                    {/* Button to cancel adding a goal */}
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.onCancel} color='#f31282' />
                    </View>
                    {/* Button to add the goal */}
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler} color='#b898e0' />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    // Style for the input container
    inputContainer: {
        flex: 1,
        justifyContent: 'center', // Center items vertically
        alignItems: 'center', // Center items horizontally
        padding: 16,
        backgroundColor: '#311b6b' // Background color for the modal
    },
    // Style for the text input
    textInput: {
        borderWidth: 1, // Border width
        borderColor: '#e4d0ff', // Border color
        backgroundColor: '#e4d0ff', // Background color
        color: '#120438', // Text color
        borderRadius: 6, // Rounded corners
        width: '100%', // Full width of the container
        padding: 16, // Padding inside the input
    },
    // Style for the button container
    buttonContainer: {
        marginTop: 16, // Margin at the top
        flexDirection: 'row' // Layout buttons in a row
    },
    // Style for individual buttons
    button: {
        width: 100, // Fixed width for buttons
        marginHorizontal: 8 // Horizontal margin between buttons
    },
    // Style for the image
    image: {
        width: 100, // Width of the image
        height: 100, // Height of the image
        margin: 20 // Margin around the image
    }
});
