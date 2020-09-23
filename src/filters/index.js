import Vue from 'vue';
import date from './date.js'

Vue.filter('data',date);

import {fillzero} from './fillzero.js'

Vue.filter('fillzero',fillzero);