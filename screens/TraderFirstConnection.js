import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TextStep from './TextStep'
import { txt } from '../constants/Strings'

export default function TraderFirstConnection() {
    return (
            <TextStep>{txt.ACCOUNT_CREATED}</TextStep>
    )
}

const styles = StyleSheet.create({})
