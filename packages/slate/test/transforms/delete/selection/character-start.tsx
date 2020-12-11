/** @jsx jsx */
import { Transforms } from 'slate'
import { jsx } from '../../..'

export const run = (editor) => {
  Transforms.deleteContent(editor)
}
export const input = (
  <editor>
    <block>
      <anchor />w<focus />
      ord
    </block>
  </editor>
)
export const output = (
  <editor>
    <block>
      <cursor />
      ord
    </block>
  </editor>
)
