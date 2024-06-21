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
        <Modal visible={props.visible} animationType='slide'>
            <StatusBar />
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                {/* TextInput for entering goals */}
                <TextInput
                    placeholder='Your goals'
                    style={styles.textInput}
                    onChangeText={goalInputHandler} // Call goalInputHandler on text change
                    value={enteredGoalText} // Bind the input value to enteredGoalText state
                />
                {/* Button to add the goal */}
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.onCancel} color='#f31282' />
                    </View>
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
        justifyContent: 'center', // Space out children evenly
        alignItems: 'center', // Align children to the center
        padding: 16,
        backgroundColor: '#311b6b'
    },
    // Style for the text input
    textInput: {
        borderWidth: 1, // Border width
        borderColor: '#e4d0ff', // Border color
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%', // Width of the text input
        padding: 16, // Padding inside the input
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row'
    },
    button: {
        width: 100,
        marginHorizontal: 8
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
});
