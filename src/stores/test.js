import { shallowRef } from 'vue'
import { defineStore } from 'pinia'
import { getTest, getResult } from '@/server/testData.js'

export const useTestStore = defineStore('test', () => {
  const testData = shallowRef(null)
  const testAnswer = shallowRef(null)
  const testResult = shallowRef(null)

  async function fetchGetTest() {
    try {
      const res = await getTest()
      testData.value = res
    } catch (err) {
      console.error(err)
    }
  }

  async function fetchSendTest({ testId, page, answerId }) {
    try {
      const res = await getTest({ testId, page, answerId })
      testData.value = res
    } catch (err) {
      console.error(err)
    }
  }

  async function fetchGetAnswer({ testId, page, answerId }) {
    try {
      testAnswer.value = null
      const res = await getResult({ testId, page, answerId })
      testAnswer.value = res
    } catch (err) {
      console.error(err)
    }
  }

  async function fetchGetResult() {
    try {
      const res = await fetch('https://swapi.dev/api/people/1/')
      const data = await res.json()
      testResult.value = data
    } catch (err) {
      console.error(err)
    }
  }

  function clearTestResult() {
    testResult.value = null
  }

  return {
    fetchGetTest,
    testData,
    fetchSendTest,
    fetchGetAnswer,
    testAnswer,
    fetchGetResult,
    testResult,
    clearTestResult,
  }
})
