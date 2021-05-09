import {OverlayModule} from '@angular/cdk/overlay'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {MarkdownViewerModule} from '../markdown-viewer'
import {PopupModule} from '../popup'

import {MindmapViewerRoutingModule} from './routing.module'
import {MindmapViewerComponent} from './mindmap-viewer'
import {NodeMoreComponent} from './node-more'

@NgModule({
  declarations: [MindmapViewerComponent, NodeMoreComponent],
  imports: [
    OverlayModule,
    CommonModule,
    MarkdownViewerModule,
    MindmapViewerRoutingModule,
    PopupModule,
  ]
})
export class MindmapViewerModule { }