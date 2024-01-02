import { View, Text } from 'react-native';

export const BirdRenderer = (props: { body: Matter.Body, color: string, size: { width: number, height: number } }) => {
    const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
    const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;
    const xBody = props.body.position.x - widthBody / 2;
    const yBody = props.body.position.y - heightBody / 2;

    return <View
        style={{
            borderWidth: 1,
            borderColor: props.color,
            borderStyle: 'solid',
            position: 'absolute',
            left: xBody,
            top: yBody,
            width: widthBody,
            height: heightBody,


            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <Text style={{
            fontSize: 30,
            textAlign: 'center',
        }}>👦🏻</Text>
    </View>
}
