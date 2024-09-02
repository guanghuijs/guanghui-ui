<script setup lang="ts">
  import { Collapse, CollapseItem } from '#/components';
</script>

<template>
  <h-card title="折叠面板">
    <Collapse>
      <CollapseItem title="栏目1" name="0">
        从前，有个小男孩叫蒂姆，他喜欢读书。有一天，他找到了一本神奇的书，把他带到了他最喜欢的角色的世界里。
      </CollapseItem>
      <CollapseItem title="栏目1" name="1">
        从前，有个小男孩叫蒂姆，他喜欢读书。有一天，他找到了一本神奇的书，把他带到了他最喜欢的角色的世界里。
      </CollapseItem>
      <CollapseItem title="栏目1" name="2">
        从前，有个小男孩叫蒂姆，他喜欢读书。有一天，他找到了一本神奇的书，把他带到了他最喜欢的角色的世界里。
      </CollapseItem>
    </Collapse>
  </h-card>
  <h-card title="手风琴模式">
    <Collapse :accordion="true">
      <CollapseItem title="栏目1" name="0">
        从前，有个小男孩叫蒂姆，他喜欢读书。有一天，他找到了一本神奇的书，把他带到了他最喜欢的角色的世界里。
      </CollapseItem>
      <CollapseItem title="栏目1" name="1">
        从前，有个小男孩叫蒂姆，他喜欢读书。有一天，他找到了一本神奇的书，把他带到了他最喜欢的角色的世界里。
      </CollapseItem>
      <CollapseItem title="栏目1" name="2">
        从前，有个小男孩叫蒂姆，他喜欢读书。有一天，他找到了一本神奇的书，把他带到了他最喜欢的角色的世界里。
      </CollapseItem>
    </Collapse>
  </h-card>
</template>

<style scoped lang="less"></style>
