import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export function Copyright() {
    return (
        <View>
            <Text style={styles.text}>
                Feito com ♥ por Vitor Honna
                {/* https://github.com/vitorhonna/nlw-return-impulse */}
            </Text>
        </View>
    );
}