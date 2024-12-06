import { describe, test, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { ref } from 'vue';
import SearchFilterChips from './SearchFilterChips.vue';

describe('SearchFilterChips', () => {
  let wrapper: any;
  let selectedTypes: any;

  beforeEach(() => {
    selectedTypes = ref(['all']);

    wrapper = mount(SearchFilterChips, {
      global: {
        provide: {
          'selected-types': selectedTypes
        },
        stubs: {
          UButton: {
            template: '<button class="u-button"><slot /></button>',
            props: ['icon', 'variant', 'size']
          }
        }
      }
    });
  });

  test('初始渲染時應該顯示所有類型選項', () => {
    const buttons = wrapper.findAll('.u-button');
    expect(buttons).toHaveLength(6);
    expect(buttons[0].text()).toBe('全部');
    expect(buttons[1].text()).toBe('網站');
  });

  test('初始狀態下應該只選擇 "all" 類型', () => {
    expect(selectedTypes.value).toEqual(['all']);
  });

  test('點擊非 "all" 類型時應該切換選擇狀態', async () => {
    const websiteButton = wrapper.findAll('.u-button')[1];
    await websiteButton.trigger('click');
    expect(selectedTypes.value).toEqual(['website']);
  });

  test('當只剩一個非 "all" 類型被選中時，取消選擇應該自動選中 "all"', async () => {
    // > 先選擇 website
    const websiteButton = wrapper.findAll('.u-button')[1];
    await websiteButton.trigger('click');
    expect(selectedTypes.value).toEqual(['website']);

    // > 再次點擊取消選擇
    await websiteButton.trigger('click');
    expect(selectedTypes.value).toEqual(['all']);
  });

  test('當選中 "all" 時應該取消其他所有選擇', async () => {
    // > 先選擇 website
    const websiteButton = wrapper.findAll('.u-button')[1];
    await websiteButton.trigger('click');

    // > 再選擇 all
    const allButton = wrapper.findAll('.u-button')[0];
    await allButton.trigger('click');
    expect(selectedTypes.value).toEqual(['all']);
  });
});
