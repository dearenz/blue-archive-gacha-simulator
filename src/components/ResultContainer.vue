<script setup lang="ts">
import type { resultItem } from '@/assets/utils/interface'
import { getThumbnailReward, getSchaledbInfo } from '@/assets/utils/api'
import type { Ref } from 'vue'
import { inject, ref } from 'vue'

const getStudents_ = inject('getStudents') as Function
const changeVisible = inject('changeVisible') as Function
const result = inject('result') as resultItem[]
const totalCnt = inject('totalCnt') as number
function confirm() {
    changeVisible(2)
    changeVisible(0)
}

function getStudents(num: number) {
    getStudents_(num)
    changeVisible(2)
    changeVisible(1)
}

function backgroundColor(star: number) {
    if (star == 1) return 'blue'
    else if (star == 2) return 'golden'
    else if (star == 3) return 'pink'
    else return null
}

var isModal: Ref<boolean> = ref(false)
function showModal() {
    isModal.value = true
}
function hideModal() {
    isModal.value = false
}

import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
    <div class="result">
        <div class="result-container">
            <div class="shadow-box" :class="{ shadow: item['StarGrade'] > 1 }" v-for="item in result">
                <a :href="getSchaledbInfo(item['PathName'])" target="_blank">
                    <div class="card" :class="backgroundColor(item['StarGrade'])">
                        <div class="char"><img :src="getThumbnailReward(item['Avatar'])" /></div>
                        <!-- <div class="char">
                            <img
                                src="https://t3.ftcdn.net/jpg/03/62/91/30/360_F_362913064_EHXLU7kTxz9EDRVzXBamD60NlOAp5vB9.jpg" />
                        </div> -->
                        <div class="new" v-show="item['isNew']"><img src="/New.png" /></div>
                        <div class="star"><img src="/Star.png" v-for="n in item['StarGrade']" /></div>
                    </div>
                </a>
            </div>
        </div>
        <div class="button-container">
            <div class="gacha-button button-blue" @click="confirm">
                <div>{{ $t('confirm') }}</div>
            </div>
            <div class="gacha-button button-yellow" @click="showModal()">
                <div>{{ $t('again') }}</div>
            </div>
            <div class="point-container">
                <img src="/Point.png" />
                <div class="text">
                    <span>{{ $t('recruitPoint') }}</span>
                </div>
                <div class="num">
                    <span>{{ totalCnt }}</span>
                </div>
            </div>
        </div>
        <!-- Modal begin -->
        <div class="modal-backdrop" v-show="isModal">
            <div class="modal">
                <div class="modal-header">
                    <span>{{ $t('modalTitle') }}</span>
                </div>
                <div class="modal-body">
                    <p>{{ $t('modalAgain') }}</p>
                </div>
                <div class="modal-footer">
                    <div class="gacha-button button-gray" @click="hideModal()">
                        <div>{{ $t('cancel') }}</div>
                    </div>
                    <div class="gacha-button button-yellow" @click="getStudents(result.length)">
                        <div>{{ $t('confirm') }}</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal end -->
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/result-card.scss';
@import '@/assets/styles/modal.scss';

.result {
    @include center;
    flex-direction: column;
    @include full-screen;
    background: url('/Background.png');
    background-size: cover;
}

.result-container {
    @include center;
    align-content: center;
    flex-wrap: wrap;
    width: 1280px;
    height: 800px;
}

.shadow-box {
    height: 300px;
    margin: 0 5px;
    @include skew;

    &.shadow {
        background: linear-gradient(
            to top,
            rgb(255 255 255/0.1) 10%,
            rgb(250 250 250/0.5) 25%,
            rgb(245 245 245/0.9) 45%,
            rgb(245 245 245/0.9) 55%,
            rgb(250 250 250/0.5) 75%,
            rgb(255 255 255/0.1) 90%
        );
    }
}
</style>
