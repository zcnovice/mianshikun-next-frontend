import React, { useState } from "react";
import './index.css';

/**
 * 全局底部栏组件
 * @constructor
 */
export default function GlobalFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="global-footer">
      <div>© {currentYear} 面试坤刷题平台</div>
      <div>
        <a href="https://github.com/zcnovice" target="_blank">
          作者：张宸
        </a>
      </div>
    </div>
  );
}
