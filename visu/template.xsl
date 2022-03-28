<?xml version="1.0"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:java="http://xml.apache.org/xslt/java"
                exclude-result-prefixes="java"
                xpath-default-namespace="https://challenges.openlegallab.ch/"
                xmlns:func="https://challenges.openlegallab.ch/">
    <xsl:output method="html" version="5" indent="yes"/>

    <!-- Constants for templates -->
    <xsl:variable name="date-format">[D01].[M01].[Y0001]</xsl:variable>
    <xsl:variable name="price-format" select="'#0.00'"/>
    <xsl:variable name="space">
        <xsl:text>&#xA0;</xsl:text>
    </xsl:variable>

    <!-- Main template -->
    <xsl:template match="document">
        <html>
            <head>
                <title>Kaufvertrag</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <link href="dist/main.min.css" rel="stylesheet"/>
            </head>

            <body>
                <div class="main container my-5 page">
                    <header class="d-flex text-sm mb-5">
                        <img width="150" src="./dist/icon.jpg"/>
                        <div class="ml-2 mt-3">
                            <h4>
                                <xsl:value-of select="//document/notary/name"/><xsl:value-of select="$space"/><xsl:value-of
                                    select="//document/notary/firstname"/>
                            </h4>
                            <h4>
                                <xsl:value-of select="//document/notary/office/zip"/>
                                <xsl:value-of select="$space"/>
                                <xsl:value-of select="//document/notary/office/city"/>
                            </h4>
                        </div>
                    </header>
                    <br/>
                    <br/>
                    <h2 style="text-align: center;font-size: 3em">ÖFFENTLICHE URKUNDE</h2>
                    <br/>
                    <h4 style="text-align: center;">über</h4>
                    <br/>
                    <h2 style="text-align: center;">Kaufvertrag</h2>
                    <br/>
                    <h5 style="text-align: center;">zwischen</h5>
                    <br/>
                    <h5 style="text-align: center;">
                        <b>
                            <xsl:value-of select="//document/seller/natural-person/firstname"/>
                            <xsl:value-of select="$space"/>
                            <xsl:value-of select="//document/seller/natural-person/name"/>
                        </b>
                    </h5>
                    <br/>
                    <h5 style="text-align: center;">und</h5>
                    <br/>
                    <h5 style="text-align: center;">
                        <b>
                            <xsl:value-of select="//document/buyer/natural-person/firstname"/>
                            <xsl:value-of select="$space"/>
                            <xsl:value-of select="//document/buyer/natural-person/name"/>
                        </b>
                    </h5>
                    <br/>
                    <br/>
                    <br/>

                    <h3 style="text-align: center;">Kaufvertrag für Fr. 1'300'000.-</h3>
                    <br />
                    <br />
                    <br />
                    <p>
                        <b>
                            <xsl:value-of select="//document/seller/natural-person/firstname"/>
                            <xsl:value-of select="$space"/>
                            <xsl:value-of select="//document/seller/natural-person/name"/>
                        </b>
                        , geboren<xsl:value-of select="$space"/>
                        <xsl:value-of select="//document/seller/natural-person/birthday"/>,
                        <xsl:value-of select="$space"/>
                        <xsl:value-of select="//document/seller/natural-person/sex"/>, von
                        <xsl:value-of select="$space"/>
                        <xsl:value-of select="//document/seller/natural-person/place-origin"/>,
                        <xsl:value-of select="$space"/>
                        <xsl:value-of select="//document/seller/natural-person/place-residency/street-name"/>
                        <xsl:value-of select="$space"/>
                        <xsl:value-of select="//document/seller/natural-person/place-residency/street-nr"/>,
                        <xsl:value-of select="$space"/>
                        <xsl:value-of select="//document/seller/natural-person/place-residency/zip"/>
                        <xsl:value-of select="$space"/>
                        <xsl:value-of select="//document/seller/natural-person/place-residency/city"/>
                    </p>
                    <p style="text-align: right;">- nachstehend "veräussernde Partei" genannt -</p>
                    <p>verkaufen hiermit an</p>
                    <p>
                        <b>
                            <xsl:value-of select="//document/buyer/natural-person/firstname"/>
                            <xsl:value-of select="$space"/>
                            <xsl:value-of select="//document/buyer/natural-person/name"/>
                        </b>
                        , geboren<xsl:value-of select="$space"/><xsl:value-of
                            select="//document/buyer/natural-person/birthday"/>,
                        <xsl:value-of select="$space"/>
                        <xsl:value-of select="//document/buyer/natural-person/sex"/>, von
                        <xsl:value-of select="$space"/>
                        <xsl:value-of select="//document/buyer/natural-person/place-origin"/>,
                        <xsl:value-of select="$space"/>
                        <xsl:value-of select="//document/buyer/natural-person/place-residency/street-name"/>
                        <xsl:value-of select="$space"/>
                        <xsl:value-of select="//document/buyer/natural-person/place-residency/street-nr"/>,
                        <xsl:value-of select="$space"/>
                        <xsl:value-of select="//document/buyer/natural-person/place-residency/zip"/>
                        <xsl:value-of select="$space"/>
                        <xsl:value-of select="//document/buyer/natural-person/place-residency/city"/>
                    </p>
                    <p style="text-align: right;">- nachstehend "erwerbende Partei" genannt -</p>
                    <p>zu Alleineigentum, was folgt:</p>

                    <p>
                        <b>EGRID:</b>
                        <xsl:value-of select="$space"/>
                        <xsl:value-of select="//document/lot/egrid"/>
                    </p>
                    <p>
                        <b>Register Name:</b>
                        <xsl:value-of select="$space"/>
                        <xsl:value-of select="//document/lot/register/name"/>
                    </p>
                    <p>
                        <b>Lot ID:</b>
                        <xsl:value-of select="$space"/>
                        <xsl:value-of select="//document/lot/register/lot-id"/>
                    </p>

                    <h3>Der Kaufpreis beträgt Fr. 1'300'000.--</h3>
                    <p>und wird wie folgt beglichen:</p>

                    <!-- Prices -->
                    <xsl:apply-templates select="//document/prices"/>

                    <!-- Special-Conditions -->
                    <xsl:apply-templates select="//document/special-conditions"/>

                    <p>So vereinbart und abgeschlossen:</p>

                    <p>Testdorf,<xsl:value-of select="$space"/><xsl:value-of select="//document/date-contract"/>
                    </p>
                    <div class="d-flex justify-content-between mb-5">
                        <p>Die Verkäuferschaft</p>
                        <p class="">Die Käuferschaft</p>
                    </div>
                </div>
            </body>

        </html>
    </xsl:template>

    <xsl:template match="document/prices">
        <table>
            <xsl:for-each select="price">
                <tr>
                    <td style="vertical-align:top">
                        <xsl:value-of select="currency"/>
                        <xsl:value-of select="$space"/>
                        <xsl:value-of select="amount"/>
                    </td>
                    <td>
                        <p>
                            <xsl:value-of select="free-text"/>
                        </p>
                    </td>
                </tr>
            </xsl:for-each>
        </table>
    </xsl:template>

    <xsl:template match="//document/special-conditions">
        <h3>Weitere Vertragsbestimmungen</h3>
        <ol>
            <xsl:for-each select="special-condition">
                <li>
                    <p>
                        <b>
                            <xsl:value-of select="title-condition"/>
                        </b>
                    </p>
                    <p>
                        <xsl:value-of select="text-condition"/>
                    </p>
                </li>
            </xsl:for-each>
        </ol>
    </xsl:template>
</xsl:stylesheet>