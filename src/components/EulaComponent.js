/** All react related imports */
import React from 'react';
/** All material-ui related imports */
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

/** Material-UI stylings */
const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
    },
  }));

/** internal classes and/or functions defined */
export default function EulaComponent() {
    const classes = useStyles();

    return(
        <div>
            <Box>
                <Paper className={classes.root}>
                    <Typography variant="h5" component="h3">
                        End-User License Agreement (EULA) 
                    </Typography>
                </Paper>
                <br/>
                <Paper style={{maxHeight: 400, overflow: 'auto'}}>
                <p><b>End-User License Agreement (EULA) of stalkmuch</b><br /><br/>
<b>This End-User License Agreement (&quot;EULA&quot;) is a legal agreement between you and stalkmuch</b></p>

<p>This EULA agreement governs your acquisition and use of our stalkmuch software (&quot;Software&quot;) directly from stalkmuch or indirectly through a stalkmuch authorized reseller or distributor (a &quot;Reseller&quot;).</p>

<p>Please read this EULA agreement carefully before completing the installation process and using the stalkmuch software. It provides a license to use the stalkmuch software and contains warranty information and liability disclaimers.</p>

<p>If you register for a free trial of the stalkmuch software, this EULA agreement will also govern that trial. By clicking &quot;accept&quot; or installing and/or using the stalkmuch software, you are confirming your acceptance of the Software and agreeing to become bound by the terms of this EULA agreement.</p>

<p>If you are entering into this EULA agreement on behalf of a company or other legal entity, you represent that you have the authority to bind such entity and its affiliates to these terms and conditions. If you do not have such authority or if you do not agree with the terms and conditions of this EULA agreement, do not install or use the Software, and you must not accept this EULA agreement.</p>

<p>This EULA agreement shall apply only to the Software supplied by stalkmuch herewith regardless of whether other software is referred to or described herein. The terms also apply to any stalkmuch updates, supplements, Internet-based services, and support services for the Software, unless other terms accompany those items on delivery. If so, those terms apply. This EULA was created by EULA Template for stalkmuch.</p>

<p><b>License Grant</b><br />
stalkmuch hereby grants you a personal, non-transferable, non-exclusive licence to use the stalkmuch software on your devices in accordance with the terms of this EULA agreement.</p>

<p>You are permitted to load the stalkmuch software (for example a PC, laptop, mobile or tablet) under your control. You are responsible for ensuring your device meets the minimum requirements of the stalkmuch software.</p>

<p>You are not permitted to:</p>

<p>Edit, alter, modify, adapt, translate or otherwise change the whole or any part of the Software nor permit the whole or any part of the Software to be combined with or become incorporated in any other software, nor decompile, disassemble or reverse engineer the Software or attempt to do any such things<br />
Reproduce, copy, distribute, resell or otherwise use the Software for any commercial purpose<br />
Allow any third party to use the Software on behalf of or for the benefit of any third party<br />
Use the Software in any way which breaches any applicable local, national or international law<br />
use the Software for any purpose that stalkmuch considers is a breach of this EULA agreement<br />
Intellectual Property and Ownership<br />
stalkmuch shall at all times retain ownership of the Software as originally downloaded by you and all subsequent downloads of the Software by you. The Software (and the copyright, and other intellectual property rights of whatever nature in the Software, including any modifications made thereto) are and shall remain the property of stalkmuch.</p>

<p>stalkmuch reserves the right to grant licences to use the Software to third parties.</p>

<p>Termination<br />
This EULA agreement is effective from the date you first use the Software and shall continue until terminated. You may terminate it at any time upon written notice to stalkmuch.</p>

<p>It will also terminate immediately if you fail to comply with any term of this EULA agreement. Upon such termination, the licenses granted by this EULA agreement will immediately terminate and you agree to stop all access and use of the Software. The provisions that by their nature continue and survive will survive any termination of this EULA agreement.</p>

<p>Governing Law<br />
This EULA agreement, and any dispute arising out of or in connection with this EULA agreement, shall be governed by and construed in accordance with the laws of tr.</p>
                </Paper>

            </Box>
        </div>
    )
}