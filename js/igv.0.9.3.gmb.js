function testOauth() {
    var url = "https://accounts.google.com/o/oauth2/auth?scope=https://www.googleapis.com/auth/genomics&state=%2Fprofile&redirect_uri=http%3A%2F%2Flocalhost%2Figv-web%2FemptyPage.html&response_type=token&client_id=661332306814-8nt29308rppg325bkq372vli8nm3na14.apps.googleusercontent.com";
    $.ajax(url, {
        success: function(data, status, xhr) {
            console.log(status)
        },
        error: function(xhr, options, e) {
            xhr.statusCode();
            console.log(xhr.getResponseHeader("location"))
        },
        complete: function(xhr, status) {
            console.log(status)
        }
    })
}
function ZStream() {}
function Inflate() {
    this.was = [0]
}
function InfBlocks(z, checkfn, w) {
    this.hufts = new Int32Array(3 * MANY),
    this.window = new Uint8Array(w),
    this.end = w,
    this.checkfn = checkfn,
    this.mode = IB_TYPE,
    this.reset(z, null ),
    this.left = 0,
    this.table = 0,
    this.index = 0,
    this.blens = null ,
    this.bb = new Int32Array(1),
    this.tb = new Int32Array(1),
    this.codes = new InfCodes,
    this.last = 0,
    this.bitk = 0,
    this.bitb = 0,
    this.read = 0,
    this.write = 0,
    this.check = 0,
    this.inftree = new InfTree
}
function InfCodes() {}
function InfTree() {}
function inflate_trees_fixed(bl, bd, tl, td, z) {
    return bl[0] = fixed_bl,
    bd[0] = fixed_bd,
    tl[0] = fixed_tl,
    td[0] = fixed_td,
    Z_OK
}
function arrayCopy(src, srcOffset, dest, destOffset, count) {
    if (0 != count) {
        if (!src)
            throw "Undef src";
        if (!dest)
            throw "Undef dest";
        0 == srcOffset && count == src.length ? arrayCopy_fast(src, dest, destOffset) : hasSubarray ? arrayCopy_fast(src.subarray(srcOffset, srcOffset + count), dest, destOffset) : 1 == src.BYTES_PER_ELEMENT && count > 100 ? arrayCopy_fast(new Uint8Array(src.buffer,src.byteOffset + srcOffset,count), dest, destOffset) : arrayCopy_slow(src, srcOffset, dest, destOffset, count)
    }
}
function arrayCopy_slow(src, srcOffset, dest, destOffset, count) {
    for (var i = 0; count > i; ++i)
        dest[destOffset + i] = src[srcOffset + i]
}
function arrayCopy_fast(src, dest, destOffset) {
    dest.set(src, destOffset)
}
function adler32(adler, buf, index, len) {
    if (null  == buf)
        return 1;
    for (var k, s1 = 65535 & adler, s2 = adler >> 16 & 65535; len > 0; ) {
        for (k = ADLER_NMAX > len ? len : ADLER_NMAX,
        len -= k; k >= 16; )
            s1 += 255 & buf[index++],
            s2 += s1,
            s1 += 255 & buf[index++],
            s2 += s1,
            s1 += 255 & buf[index++],
            s2 += s1,
            s1 += 255 & buf[index++],
            s2 += s1,
            s1 += 255 & buf[index++],
            s2 += s1,
            s1 += 255 & buf[index++],
            s2 += s1,
            s1 += 255 & buf[index++],
            s2 += s1,
            s1 += 255 & buf[index++],
            s2 += s1,
            s1 += 255 & buf[index++],
            s2 += s1,
            s1 += 255 & buf[index++],
            s2 += s1,
            s1 += 255 & buf[index++],
            s2 += s1,
            s1 += 255 & buf[index++],
            s2 += s1,
            s1 += 255 & buf[index++],
            s2 += s1,
            s1 += 255 & buf[index++],
            s2 += s1,
            s1 += 255 & buf[index++],
            s2 += s1,
            s1 += 255 & buf[index++],
            s2 += s1,
            k -= 16;
        if (0 != k)
            do
                s1 += 255 & buf[index++],
                s2 += s1;
            while (0 != --k);s1 %= ADLER_BASE,
        s2 %= ADLER_BASE
    }
    return s2 << 16 | s1
}
function jszlib_inflate_buffer(buffer, start, length, afterUncOffset) {
    buffer = start ? new Uint8Array(buffer,start,length) : new Uint8Array(buffer);
    var z = new ZStream;
    z.inflateInit(DEF_WBITS, !0),
    z.next_in = buffer,
    z.next_in_index = 0,
    z.avail_in = buffer.length;
    for (var oBlockList = [], totalSize = 0; ; ) {
        var obuf = new Uint8Array(32e3);
        z.next_out = obuf,
        z.next_out_index = 0,
        z.avail_out = obuf.length;
        var status = z.inflate(Z_NO_FLUSH);
        if (status != Z_OK && status != Z_STREAM_END)
            throw z.msg;
        if (0 != z.avail_out) {
            var newob = new Uint8Array(obuf.length - z.avail_out);
            arrayCopy(obuf, 0, newob, 0, obuf.length - z.avail_out),
            obuf = newob
        }
        if (oBlockList.push(obuf),
        totalSize += obuf.length,
        status == Z_STREAM_END)
            break
    }
    if (afterUncOffset && (afterUncOffset[0] = (start || 0) + z.next_in_index),
    1 == oBlockList.length)
        return oBlockList[0].buffer;
    for (var out = new Uint8Array(totalSize), cursor = 0, i = 0; i < oBlockList.length; ++i) {
        var b = oBlockList[i];
        arrayCopy(b, 0, out, cursor, b.length),
        cursor += b.length
    }
    return out.buffer
}
var igv = function(igv) {
    function readInt(ba, offset) {
        return ba[offset + 3] << 24 | ba[offset + 2] << 16 | ba[offset + 1] << 8 | ba[offset]
    }
    function readShort(ba, offset) {
        return ba[offset + 1] << 8 | ba[offset]
    }
    var READ_PAIRED_FLAG = 1
      , PROPER_PAIR_FLAG = 2
      , READ_UNMAPPED_FLAG = 4
      , MATE_UNMAPPED_FLAG = 8
      , READ_STRAND_FLAG = 16
      , MATE_STRAND_FLAG = 32
      , FIRST_OF_PAIR_FLAG = 64
      , SECOND_OF_PAIR_FLAG = 128
      , NOT_PRIMARY_ALIGNMENT_FLAG = 256
      , READ_FAILS_VENDOR_QUALITY_CHECK_FLAG = 512
      , DUPLICATE_READ_FLAG = 1024
      , SUPPLEMENTARY_ALIGNMENT_FLAG = 2048;
    return igv.BamAlignment = function() {
        this.hidden = !1
    }
    ,
    igv.BamAlignment.prototype.isMapped = function() {
        return 0 == (this.flags & READ_UNMAPPED_FLAG)
    }
    ,
    igv.BamAlignment.prototype.isPaired = function() {
        return 0 != (this.flags & READ_PAIRED_FLAG)
    }
    ,
    igv.BamAlignment.prototype.isProperPair = function() {
        return 0 != (this.flags & PROPER_PAIR_FLAG)
    }
    ,
    igv.BamAlignment.prototype.isFistOfPair = function() {
        return 0 != (this.flags & FIRST_OF_PAIR_FLAG)
    }
    ,
    igv.BamAlignment.prototype.isSecondOfPair = function() {
        return 0 != (this.flags & SECOND_OF_PAIR_FLAG)
    }
    ,
    igv.BamAlignment.prototype.isNotPrimary = function() {
        return 0 != (this.flags & NOT_PRIMARY_ALIGNMENT_FLAG)
    }
    ,
    igv.BamAlignment.prototype.isSupplementary = function() {
        return 0 != (this.flags & SUPPLEMENTARY_ALIGNMENT_FLAG)
    }
    ,
    igv.BamAlignment.prototype.isFailsVendorQualityCheck = function() {
        return 0 != (this.flags & READ_FAILS_VENDOR_QUALITY_CHECK_FLAG)
    }
    ,
    igv.BamAlignment.prototype.isDuplicate = function() {
        return 0 != (this.flags & DUPLICATE_READ_FLAG)
    }
    ,
    igv.BamAlignment.prototype.isMateMapped = function() {
        return 0 == (this.flags & MATE_UNMAPPED_FLAG)
    }
    ,
    igv.BamAlignment.prototype.isNegativeStrand = function() {
        return 0 != (this.flags & READ_STRAND_FLAG)
    }
    ,
    igv.BamAlignment.prototype.isMateNegativeStrand = function() {
        return 0 != (this.flags & MATE_STRAND_FLAG)
    }
    ,
    igv.BamAlignment.prototype.tags = function() {
        function decodeTags(ba) {
            for (var p = 0, len = ba.length, tags = {}; len > p; ) {
                var value, tag = String.fromCharCode(ba[p]) + String.fromCharCode(ba[p + 1]), type = String.fromCharCode(ba[p + 2]);
                if ("A" == type)
                    value = String.fromCharCode(ba[p + 3]),
                    p += 4;
                else if ("i" === type || "I" === type)
                    value = readInt(ba, p + 3),
                    p += 7;
                else if ("c" === type || "C" === type)
                    value = ba[p + 3],
                    p += 4;
                else if ("s" === type || "S" === type)
                    value = readShort(ba, p + 3),
                    p += 5;
                else if ("f" === type)
                    value = "floats not yet supported";
                else if ("Z" === type)
                    for (p += 3,
                    value = ""; ; ) {
                        var cc = ba[p++];
                        if (0 === cc)
                            break;
                        value += String.fromCharCode(cc)
                    }
                else
                    value = "Error unknown type: " + type;
                tags[tag] = value
            }
            return tags
        }
        this.tagDict || (this.tagBA ? (this.tagDict = decodeTags(this.tagBA),
        this.tagBA = void 0) : this.tagDict = {})
    }
    ,
    igv.BamAlignment.prototype.popupData = function(genomicLocation) {
        function yesNo(bool) {
            return bool ? "Yes" : "No"
        }
        var isFirst;
        nameValues = [],
        nameValues.push({
            name: "Read Name",
            value: this.readName
        }),
        nameValues.push("<hr>"),
        nameValues.push({
            name: "Alignment Start",
            value: igv.numberFormatter(1 + this.start),
            borderTop: !0
        }),
        nameValues.push({
            name: "Read Strand",
            value: !0 === this.strand ? "(+)" : "(-)",
            borderTop: !0
        }),
        nameValues.push({
            name: "Cigar",
            value: this.cigar
        }),
        nameValues.push({
            name: "Mapped",
            value: yesNo(this.isMapped())
        }),
        nameValues.push({
            name: "Mapping Quality",
            value: this.mq
        }),
        nameValues.push({
            name: "Secondary",
            value: yesNo(this.isNotPrimary())
        }),
        nameValues.push({
            name: "Supplementary",
            value: yesNo(this.isSupplementary())
        }),
        nameValues.push({
            name: "Duplicate",
            value: yesNo(this.isDuplicate())
        }),
        nameValues.push({
            name: "Failed QC",
            value: yesNo(this.isFailsVendorQualityCheck())
        }),
        this.isPaired() && (nameValues.push("<hr>"),
        nameValues.push({
            name: "First in Pair",
            value: !this.isSecondOfPair(),
            borderTop: !0
        }),
        nameValues.push({
            name: "Mate is Mapped",
            value: yesNo(this.isMateMapped())
        }),
        this.isMapped() && (nameValues.push({
            name: "Mate Start",
            value: this.matePos
        }),
        nameValues.push({
            name: "Mate Strand",
            value: this.isMateNegativeStrand() ? "(-)" : "(+)"
        }),
        nameValues.push({
            name: "Insert Size",
            value: this.fragmentLength
        }))),
        nameValues.push("<hr>"),
        this.tags(),
        isFirst = !0;
        for (var key in this.tagDict)
            this.tagDict.hasOwnProperty(key) && (isFirst ? (nameValues.push({
                name: key,
                value: this.tagDict[key],
                borderTop: !0
            }),
            isFirst = !1) : nameValues.push({
                name: key,
                value: this.tagDict[key]
            }));
        return nameValues
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    return igv.BamAlignmentRow = function() {
        this.alignments = [],
        this.score = void 0
    }
    ,
    igv.BamAlignmentRow.prototype.findCenterAlignment = function(bpStart, bpEnd) {
        var centerAlignment = void 0;
        return this.alignments.forEach(function(a) {
            void 0 === centerAlignment && (a.start + a.lengthOnRef < bpStart || a.start > bpEnd || (centerAlignment = a))
        }),
        centerAlignment
    }
    ,
    igv.BamAlignmentRow.prototype.updateScore = function(genomicLocation, genomicInterval, sortOption) {
        this.score = this.caculateScore(genomicLocation, 1 + genomicLocation, genomicInterval, sortOption)
    }
    ,
    igv.BamAlignmentRow.prototype.caculateScore = function(bpStart, bpEnd, genomicInterval, sortOption) {
        var baseScore, alignment;
        return alignment = this.findCenterAlignment(bpStart, bpEnd),
        void 0 === alignment ? Number.MAX_VALUE : "NUCLEOTIDE" === sortOption.sort ? (baseScore = void 0,
        alignment.blocks.forEach(function(block) {
            var reference, base, coverage, count, phred, sequence = genomicInterval.sequence, coverageMap = genomicInterval.coverageMap;
            if ("*" !== block.seq)
                for (var i = 0, indexReferenceSequence = block.start - genomicInterval.start, bpBlockSequence = block.start, lengthBlockSequence = block.seq.length; lengthBlockSequence > i; i++,
                indexReferenceSequence++,
                bpBlockSequence++)
                    bpStart === bpBlockSequence && (reference = sequence.charAt(indexReferenceSequence),
                    base = block.seq.charAt(i),
                    "=" === base && (base = reference),
                    "N" === base ? baseScore = 2 : base === reference ? baseScore = 3 : "X" === base || base !== reference ? (coverage = coverageMap.coverage[bpBlockSequence - coverageMap.bpStart],
                    count = coverage["pos" + base] + coverage["neg" + base],
                    phred = coverage.qual ? coverage.qual : 0,
                    baseScore = -(count + phred / 1e3)) : console.log("BamAlignmentRow.caculateScore - huh?"));
            else
                baseScore = 3
        }),
        void 0 === baseScore ? Number.MAX_VALUE : baseScore) : "STRAND" === sortOption.sort ? alignment.strand ? 1 : -1 : "START" === sortOption.sort ? alignment.start : Number.MAX_VALUE
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    function reg2bins(beg, end) {
        var k, list = [];
        for (end >= 1 << 29 && (end = 1 << 29),
        --end,
        list.push(0),
        k = 1 + (beg >> 26); 1 + (end >> 26) >= k; ++k)
            list.push(k);
        for (k = 9 + (beg >> 23); 9 + (end >> 23) >= k; ++k)
            list.push(k);
        for (k = 73 + (beg >> 20); 73 + (end >> 20) >= k; ++k)
            list.push(k);
        for (k = 585 + (beg >> 17); 585 + (end >> 17) >= k; ++k)
            list.push(k);
        for (k = 4681 + (beg >> 14); 4681 + (end >> 14) >= k; ++k)
            list.push(k);
        return list
    }
    const BAI_MAGIC = 21578050
      , TABIX_MAGIC = 21578324;
    return igv.loadBamIndex = function(indexURL, config, continuation, tabix) {
        var genome = igv.browser ? igv.browser.genome : null ;
        igvxhr.loadArrayBuffer(indexURL, {
            headers: config.headers,
            success: function(arrayBuffer) {
                var magic, nbin, nintv, nref, parser, binIndex, linearIndex, binNumber, cs, ce, b, i, ref, sequenceIndexMap, indices = [], blockMin = Number.MAX_VALUE, blockMax = 0;
                if (!arrayBuffer)
                    return void continuation(null );
                if (tabix) {
                    var inflate = new Zlib.Gunzip(new Uint8Array(arrayBuffer));
                    arrayBuffer = inflate.decompress().buffer
                }
                if (parser = new igv.BinaryParser(new DataView(arrayBuffer)),
                magic = parser.getInt(),
                !(magic === BAI_MAGIC || tabix && magic === TABIX_MAGIC))
                    throw new Error(indexURL + " is not a " + (tabix ? "tabix" : "bai") + " file");
                if (nref = parser.getInt(),
                tabix) {
                    parser.getInt(),
                    parser.getInt(),
                    parser.getInt(),
                    parser.getInt(),
                    parser.getInt(),
                    parser.getInt(),
                    parser.getInt();
                    for (sequenceIndexMap = {},
                    i = 0; nref > i; i++) {
                        var seq_name = parser.getString();
                        genome && (seq_name = genome.getChromosomeName(seq_name)),
                        sequenceIndexMap[seq_name] = i
                    }
                }
                for (ref = 0; nref > ref; ++ref) {
                    for (binIndex = {},
                    linearIndex = [],
                    nbin = parser.getInt(),
                    b = 0; nbin > b; ++b) {
                        binNumber = parser.getInt(),
                        binIndex[binNumber] = [];
                        var nchnk = parser.getInt();
                        for (i = 0; nchnk > i; i++)
                            cs = parser.getVPointer(),
                            ce = parser.getVPointer(),
                            cs && ce && (cs.block < blockMin && (blockMin = cs.block),
                            ce.block > blockMax && (blockMax = ce.block),
                            binIndex[binNumber].push([cs, ce]))
                    }
                    for (nintv = parser.getInt(),
                    i = 0; nintv > i; i++)
                        cs = parser.getVPointer(),
                        linearIndex.push(cs);
                    nbin > 0 && (indices[ref] = {
                        binIndex: binIndex,
                        linearIndex: linearIndex
                    })
                }
                continuation(new igv.BamIndex(indices,blockMin,blockMax,sequenceIndexMap,tabix))
            }
        })
    }
    ,
    igv.BamIndex = function(indices, headerSize, blockMax, sequenceIndexMap, tabix) {
        this.headerSize = headerSize,
        this.indices = indices,
        this.sequenceIndexMap = sequenceIndexMap,
        this.tabix = tabix,
        this.blockMax = blockMax
    }
    ,
    igv.BamIndex.prototype.blocksForRange = function(refId, min, max) {
        var overlappingBins, leafChunks, otherChunks, nintv, lowest, minLin, lb, prunedOtherChunks, i, chnk, dif, intChunks, mergedChunks, bam = this, ba = bam.indices[refId];
        if (ba) {
            for (overlappingBins = reg2bins(min, max),
            leafChunks = [],
            otherChunks = [],
            overlappingBins.forEach(function(bin) {
                if (ba.binIndex[bin])
                    for (var chunks = ba.binIndex[bin], nchnk = chunks.length, c = 0; nchnk > c; ++c) {
                        var cs = chunks[c][0]
                          , ce = chunks[c][1];
                        (4681 > bin ? otherChunks : leafChunks).push({
                            minv: cs,
                            maxv: ce,
                            bin: bin
                        })
                    }
            }),
            nintv = ba.linearIndex.length,
            lowest = null ,
            minLin = Math.min(min >> 14, nintv - 1),
            maxLin = Math.min(max >> 14, nintv - 1),
            i = minLin; i <= maxLin; ++i)
                lb = ba.linearIndex[i],
                lb && (!lowest || lb.block < lowest.block || lb.offset < lowest.offset) && (lowest = lb);
            if (prunedOtherChunks = [],
            null  != lowest)
                for (i = 0; i < otherChunks.length; ++i)
                    chnk = otherChunks[i],
                    chnk.maxv.block >= lowest.block && chnk.maxv.offset >= lowest.offset && prunedOtherChunks.push(chnk);
            for (intChunks = [],
            i = 0; i < prunedOtherChunks.length; ++i)
                intChunks.push(prunedOtherChunks[i]);
            for (i = 0; i < leafChunks.length; ++i)
                intChunks.push(leafChunks[i]);
            if (intChunks.sort(function(c0, c1) {
                return dif = c0.minv.block - c1.minv.block,
                0 != dif ? dif : c0.minv.offset - c1.minv.offset
            }),
            mergedChunks = [],
            intChunks.length > 0) {
                for (var cur = intChunks[0], i = 1; i < intChunks.length; ++i) {
                    var nc = intChunks[i];
                    nc.minv.block - cur.maxv.block < 65e3 ? cur = {
                        minv: cur.minv,
                        maxv: nc.maxv
                    } : (mergedChunks.push(cur),
                    cur = nc)
                }
                mergedChunks.push(cur)
            }
            return mergedChunks
        }
        return []
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    function getContentLength(bam, continuation) {
        bam.contentLength ? continuation(bam.contentLength) : igvxhr.getContentLength(bam.headPath, {
            headers: bam.headers,
            success: function(contentLength) {
                bam.contentLength = contentLength,
                continuation(bam.contentLength)
            },
            error: function(unused, xhr) {
                bam.contentLength = -1,
                continuation(bam.contentLength)
            }
        })
    }
    function getIndex(bam, continuation) {
        bam.index;
        bam.index ? continuation(bam.index) : igv.loadBamIndex(bam.baiPath, bam.config, function(index) {
            bam.index = index,
            bam.contentLength = index.blockMax,
            continuation(bam.index)
        })
    }
    function getChrIndex(bam, continuation) {
        bam.chrToIndex ? continuation(bam.chrToIndex) : bam.readHeader(function() {
            continuation(bam.chrToIndex)
        })
    }
    function readInt(ba, offset) {
        return ba[offset + 3] << 24 | ba[offset + 2] << 16 | ba[offset + 1] << 8 | ba[offset]
    }
    var SECRET_DECODER = ["=", "A", "C", "x", "G", "x", "x", "x", "T", "x", "x", "x", "x", "x", "x", "N"]
      , CIGAR_DECODER = ["M", "I", "D", "N", "S", "H", "P", "=", "X", "?", "?", "?", "?", "?", "?", "?"]
      , READ_STRAND_FLAG = 16;
    const MAX_GZIP_BLOCK_SIZE = 65536;
    return igv.BamReader = function(config) {
        this.config = config,
        this.bamPath = "gcs" === config.sourceType ? igv.translateGoogleCloudURL(config.url) : config.url,
        this.baiPath = "gcs" === config.sourceType ? igv.translateGoogleCloudURL(config.url + ".bai") : config.url + ".bai",
        this.headPath = config.headURL || this.bamPath
    }
    ,
    igv.BamReader.prototype.readFeatures = function(chr, min, max, continuation, task) {
        function decodeBamRecords(ba, offset, alignments, min, max, chrId) {
            for (var blockSize, blockEnd, alignment, blocks, refID, pos, bmn, bin, mq, nl, flag_nc, flag, nc, lseq, mateRefID, matePos, readName, j, p, lengthOnRef, cigar, c, cigarArray, seq, seqBytes; ; ) {
                if (blockSize = readInt(ba, offset),
                blockEnd = offset + blockSize + 4,
                blockEnd >= ba.length)
                    return;
                if (alignment = new igv.BamAlignment,
                refID = readInt(ba, offset + 4),
                pos = readInt(ba, offset + 8),
                refID > chrId || pos > max)
                    return;
                if (!(chrId > refID)) {
                    for (bmn = readInt(ba, offset + 12),
                    bin = (4294901760 & bmn) >> 16,
                    mq = (65280 & bmn) >> 8,
                    nl = 255 & bmn,
                    flag_nc = readInt(ba, offset + 16),
                    flag = (4294901760 & flag_nc) >> 16,
                    nc = 65535 & flag_nc,
                    alignment.flags = flag,
                    alignment.strand = !(flag & READ_STRAND_FLAG),
                    lseq = readInt(ba, offset + 20),
                    mateRefID = readInt(ba, offset + 24),
                    matePos = readInt(ba, offset + 28),
                    alignment.fragmentLength = readInt(ba, offset + 32),
                    readName = "",
                    j = 0; nl - 1 > j; ++j)
                        readName += String.fromCharCode(ba[offset + 36 + j]);
                    for (p = offset + 36 + nl,
                    lengthOnRef = 0,
                    cigar = "",
                    cigarArray = [],
                    c = 0; nc > c; ++c) {
                        var cigop = readInt(ba, p)
                          , opLen = cigop >> 4
                          , opLtr = CIGAR_DECODER[15 & cigop];
                        ("M" == opLtr || "EQ" == opLtr || "X" == opLtr || "D" == opLtr || "N" == opLtr || "=" == opLtr) && (lengthOnRef += opLen),
                        cigar = cigar + opLen + opLtr,
                        p += 4,
                        cigarArray.push({
                            len: opLen,
                            ltr: opLtr
                        })
                    }
                    if (alignment.cigar = cigar,
                    alignment.lengthOnRef = lengthOnRef,
                    !(alignment.start + alignment.lengthOnRef < min)) {
                        for (seq = "",
                        seqBytes = lseq + 1 >> 1,
                        j = 0; seqBytes > j; ++j) {
                            var sb = ba[p + j];
                            seq += SECRET_DECODER[(240 & sb) >> 4],
                            seq += SECRET_DECODER[15 & sb]
                        }
                        if (seq = seq.substring(0, lseq),
                        p += seqBytes,
                        alignment.seq = seq,
                        1 === lseq && "*" === String.fromCharCode(ba[p + j] + 33))
                            ;
                        else
                            for (alignment.qual = [],
                            j = 0; lseq > j; ++j)
                                alignment.qual.push(ba[p + j]);
                        p += lseq,
                        alignment.start = pos,
                        alignment.mq = mq,
                        alignment.readName = readName,
                        alignment.chr = bam.indexToChr[refID],
                        mateRefID >= 0 && (alignment.mate = {
                            chr: bam.indexToChr[mateRefID],
                            position: matePos
                        }),
                        alignment.tagBA = new Uint8Array(ba.buffer.slice(p, blockEnd)),
                        p += blockEnd,
                        (!min || alignment.start <= max && alignment.start + alignment.lengthOnRef >= min) && (void 0 === chrId || refID == chrId) && (blocks = makeBlocks(alignment, cigarArray),
                        alignment.blocks = blocks.blocks,
                        alignment.insertions = blocks.insertions,
                        alignments.push(alignment)),
                        offset = blockEnd
                    }
                }
            }
        }
        function makeBlocks(record, cigarArray) {
            for (var insertions, blockSeq, blockQuals, gapType, blocks = [], seqOffset = 0, pos = record.start, len = cigarArray.length, i = 0; len > i; i++) {
                var c = cigarArray[i];
                switch (c.ltr) {
                case "H":
                    break;
                case "P":
                    break;
                case "S":
                    seqOffset += c.len,
                    gapType = "S";
                    break;
                case "N":
                    pos += c.len,
                    gapType = "N";
                    break;
                case "D":
                    pos += c.len,
                    gapType = "D";
                    break;
                case "I":
                    blockSeq = "*" === record.seq ? "*" : record.seq.substr(seqOffset, c.len),
                    blockQuals = record.qual ? record.qual.slice(seqOffset, c.len) : void 0,
                    void 0 === insertions && (insertions = []),
                    insertions.push({
                        start: pos,
                        len: c.len,
                        seq: blockSeq,
                        qual: blockQuals
                    }),
                    seqOffset += c.len;
                    break;
                case "M":
                case "EQ":
                case "=":
                case "X":
                    blockSeq = "*" === record.seq ? "*" : record.seq.substr(seqOffset, c.len),
                    blockQuals = record.qual ? record.qual.slice(seqOffset, c.len) : void 0,
                    blocks.push({
                        start: pos,
                        len: c.len,
                        seq: blockSeq,
                        qual: blockQuals,
                        gapType: gapType
                    }),
                    seqOffset += c.len,
                    pos += c.len;
                    break;
                default:
                    console.log("Error processing cigar element: " + c.len + c.ltr)
                }
            }
            return {
                blocks: blocks,
                insertions: insertions
            }
        }
        var bam = this;
        getChrIndex(this, function(chrToIndex) {
            var chunks, chrId = chrToIndex[chr];
            void 0 === chrId ? continuation([]) : getIndex(bam, function(bamIndex) {
                function loadNextChunk(chunkNumber) {
                    var c = chunks[chunkNumber]
                      , fetchMin = c.minv.block
                      , fetchMax = c.maxv.block + 65e3
                      , range = bam.contentLength > 0 && fetchMax > bam.contentLength ? {
                        start: fetchMin
                    } : {
                        start: fetchMin,
                        size: fetchMax - fetchMin + 1
                    };
                    igvxhr.loadArrayBuffer(bam.bamPath, {
                        task: task,
                        headers: bam.config.headers,
                        range: range,
                        success: function(compressed) {
                            try {
                                var ba = new Uint8Array(igv.unbgzf(compressed))
                            } catch (e) {
                                console.log(e),
                                continuation(records)
                            }
                            decodeBamRecords(ba, chunks[chunkNumber].minv.offset, records, min, max, chrId),
                            chunkNumber++,
                            chunkNumber >= chunks.length ? (chunkNumber > 0 && records.length > 1 && records.sort(function(a, b) {
                                return a.start - b.start
                            }),
                            continuation(records)) : loadNextChunk(chunkNumber)
                        }
                    })
                }
                if (chunks = bamIndex.blocksForRange(chrId, min, max),
                !chunks)
                    return void continuation(null , "Error in index fetch");
                if (0 === chunks.length)
                    return void continuation([]);
                var records = [];
                loadNextChunk(0)
            })
        })
    }
    ,
    igv.BamReader.prototype.readHeader = function(continuation) {
        var bam = this;
        getContentLength(bam, function(contentLength) {
            getIndex(bam, function(index) {
                var contentLength = index.blockMax
                  , len = index.headerSize + MAX_GZIP_BLOCK_SIZE + 100;
                0 >= contentLength && (contentLength = index.blockMax),
                bam.contentLength = contentLength,
                contentLength > 0 && (len = Math.min(contentLength, len)),
                igvxhr.loadArrayBuffer(bam.bamPath, {
                    headers: bam.config.headers,
                    range: {
                        start: 0,
                        size: len
                    },
                    success: function(compressedBuffer) {
                        for (var unc = igv.unbgzf(compressedBuffer, len), uncba = new Uint8Array(unc), samHeaderLen = (readInt(uncba, 0),
                        readInt(uncba, 4)), samHeader = "", genome = igv.browser ? igv.browser.genome : null , i = 0; samHeaderLen > i; ++i)
                            samHeader += String.fromCharCode(uncba[i + 8]);
                        var nRef = readInt(uncba, samHeaderLen + 8)
                          , p = samHeaderLen + 12;
                        bam.chrToIndex = {},
                        bam.indexToChr = [];
                        for (var i = 0; nRef > i; ++i) {
                            for (var lName = readInt(uncba, p), name = "", j = 0; lName - 1 > j; ++j)
                                name += String.fromCharCode(uncba[p + 4 + j]);
                            readInt(uncba, p + lName + 4);
                            genome && genome.getChromosomeName && (name = genome.getChromosomeName(name)),
                            bam.chrToIndex[name] = i,
                            bam.indexToChr.push(name),
                            p = p + 8 + lName
                        }
                        continuation()
                    }
                })
            })
        })
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    function packAlignmentRows(genomicInterval, alignments, maxRows) {
        if (0 === alignments.length)
            return [];
        var alignmentRow, index, bucket, alignment, bucketList = [], allocatedCount = 0, nextStart = genomicInterval.start, alignmentSpace = 8, packedAlignmentRows = [], bucketStart = alignments[0].start;
        for (alignments.forEach(function(alignment) {
            var buckListIndex = alignment.start - bucketStart;
            void 0 === bucketList[buckListIndex] && (bucketList[buckListIndex] = []),
            bucketList[buckListIndex].push(alignment)
        }); allocatedCount < alignments.length && packedAlignmentRows.length < maxRows; ) {
            for (alignmentRow = new igv.BamAlignmentRow; nextStart <= genomicInterval.end; ) {
                for (bucket = void 0; !bucket && nextStart <= genomicInterval.end; )
                    index = nextStart - bucketStart,
                    void 0 === bucketList[index] ? ++nextStart : bucket = bucketList[index];
                if (!bucket)
                    break;
                alignment = bucket.pop(),
                0 === bucket.length && (bucketList[index] = void 0),
                alignmentRow.alignments.push(alignment),
                nextStart = alignment.start + alignment.lengthOnRef + alignmentSpace,
                ++allocatedCount
            }
            alignmentRow.alignments.length > 0 && packedAlignmentRows.push(alignmentRow),
            nextStart = bucketStart
        }
        return packedAlignmentRows
    }
    return igv.BamSource = function(config) {
        this.config = config,
        "ga4gh" === config.sourceType ? this.bamReader = new igv.Ga4ghAlignmentReader(config) : this.bamReader = new igv.BamReader(config)
    }
    ,
    igv.BamSource.prototype.getFeatures = function(chr, bpStart, bpEnd, continuation, task) {
        if (this.genomicInterval && this.genomicInterval.contains(chr, bpStart, bpEnd))
            continuation(this.genomicInterval);
        else {
            var self = this;
            this.bamReader.readFeatures(chr, bpStart, bpEnd, function(alignments) {
                alignments && (self.genomicInterval = new igv.GenomicInterval(chr,bpStart,bpEnd),
                igv.browser.genome.sequence.getSequence(self.genomicInterval.chr, self.genomicInterval.start, self.genomicInterval.end, function(sequence) {
                    var maxRows = self.config.maxRows || 500;
                    sequence && (self.genomicInterval.coverageMap = new igv.CoverageMap(chr,bpStart,bpEnd,alignments,sequence),
                    self.genomicInterval.packedAlignmentRows = packAlignmentRows(self.genomicInterval, alignments, maxRows),
                    self.genomicInterval.features = void 0,
                    self.genomicInterval.sequence = sequence,
                    continuation(self.genomicInterval))
                }, task))
            }, task)
        }
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    function doSortAlignmentRows(genomicLocation, genomicInterval, sortOption) {
        var alignmentRows = genomicInterval.packedAlignmentRows
          , sequence = genomicInterval.sequence;
        return sequence ? (sequence = sequence.toUpperCase(),
        alignmentRows.forEach(function(alignmentRow) {
            alignmentRow.updateScore(genomicLocation, genomicInterval, sortOption)
        }),
        void alignmentRows.sort(function(a, b) {
            return a.score - b.score
        })) : void console.log("No sequence, no traversal. No discussion!")
    }
    function shadedBaseColor(qual, nucleotide, genomicLocation) {
        var color, alpha, minQ = 5, maxQ = 20, foregroundColor = igv.nucleotideColorComponents[nucleotide];
        if (foregroundColor)
            return alpha = minQ > qual ? .1 : Math.max(.1, Math.min(1, .1 + .9 * (qual - minQ) / (maxQ - minQ))),
            alpha = Math.round(10 * alpha) / 10,
            color = alpha >= 1 ? igv.nucleotideColors[nucleotide] : "rgba(" + foregroundColor[0] + "," + foregroundColor[1] + "," + foregroundColor[2] + "," + alpha + ")"
    }
    return igv.BAMTrack = function(config) {
        igv.configTrack(this, config),
        this.visibilityWindow = config.visibilityWindow || 3e4,
        this.alignmentRowHeight = config.alignmentRowHeight || 14,
        this.coverageTrackHeight = config.coverageTrackHeight || 50,
        this.defaultColor = config.defaultColor || "rgb(185, 185, 185)",
        this.color = config.color || this.defaultColor,
        this.negStrandColor = config.negStrandColor || "rgba(150, 150, 230, 0.75)",
        this.posStrandColor = config.posStrandColor || "rgba(230, 150, 150, 0.75)",
        this.firstInfPairColor = "rgba(150, 150, 230, 0.75)",
        this.secondInPairColor = "rgba(230, 150, 150, 0.75)",
        this.insertionColor = config.insertionColor || "rgb(138, 94, 161)",
        this.deletionColor = config.deletionColor || "black",
        this.skippedColor = config.skippedColor || "rgb(150, 170, 170)",
        this.alignmentRowYInset = 1,
        this.alignmentShading = "none",
        this.sortOption = config.sortOption || {
            sort: "NUCLEOTIDE"
        },
        this.filterOption = config.filterOption || {
            name: "mappingQuality",
            params: [30, void 0]
        },
        this.featureSource = new igv.BamSource(config)
    }
    ,
    igv.BAMTrack.alignmentShadingOptions = {
        none: function(bamTrack, alignment) {
            return bamTrack.color
        },
        strand: function(bamTrack, alignment) {
            return alignment.strand ? bamTrack.posStrandColor : bamTrack.negStrandColor
        },
        firstOfPairStrand: function(bamTrack, alignment) {
            return alignment.isPaired() ? alignment.isFistOfPair() ? alignment.strand ? bamTrack.posStrandColor : bamTrack.negStrandColor : alignment.isSecondOfPair() ? alignment.strand ? bamTrack.negStrandColor : bamTrack.posStrandColor : void console.log("ERROR. Paired alignments are either first or second.") : bamTrack.color
        }
    },
    igv.BAMTrack.filters = {
        noop: function() {
            return function(alignment) {
                return !1
            }
        },
        strand: function(strand) {
            return function(alignment) {
                return alignment.strand === strand
            }
        },
        mappingQuality: function(lower, upper) {
            return function(alignment) {
                return lower && alignment.mq < lower ? !0 : upper && alignment.mq > upper ? !0 : !1
            }
        }
    },
    igv.BAMTrack.selectFilter = function(bamTrack, filterOption) {
        var a, b;
        return "mappingQuality" === filterOption.name ? (a = bamTrack.filterOption.params[0],
        b = bamTrack.filterOption.params[1],
        igv.BAMTrack.filters[filterOption.name](a, b)) : "strand" === filterOption.name ? (a = bamTrack.filterOption.params[0],
        igv.BAMTrack.filters[filterOption.name](a)) : "noop" === filterOption.name ? igv.BAMTrack.filters[filterOption.name]() : void 0
    }
    ,
    igv.BAMTrack.prototype.filterAlignments = function(filterOption, callback) {
        var pixelWidth, bpWidth, bpStart, bpEnd, filter;
        filter = igv.BAMTrack.selectFilter(this, filterOption),
        pixelWidth = 3 * this.trackView.canvas.width,
        bpWidth = Math.round(igv.browser.referenceFrame.toBP(pixelWidth)),
        bpStart = Math.max(0, Math.round(igv.browser.referenceFrame.start - bpWidth / 3)),
        bpEnd = bpStart + bpWidth,
        this.featureSource.getFeatures(igv.browser.referenceFrame.chr, bpStart, bpEnd, function(genomicInterval) {
            genomicInterval.packedAlignmentRows.forEach(function(alignmentRow) {
                alignmentRow.alignments.forEach(function(alignment) {
                    alignment.hidden = filter(alignment)
                })
            }),
            callback()
        })
    }
    ,
    igv.BAMTrack.prototype.shiftClick = function(genomicLocation, event) {
        var myself = this;
        this.filterAlignments(this.filterOption, function() {
            myself.trackView.update(),
            $(myself.trackView.viewportDiv).scrollTop(0)
        })
    }
    ,
    igv.BAMTrack.prototype.sortAlignmentRows = function(genomicLocation, sortOption) {
        var myself = this;
        this.featureSource.getFeatures(igv.browser.referenceFrame.chr, genomicLocation, 1 + genomicLocation, function(genomicInterval) {
            doSortAlignmentRows(genomicLocation, genomicInterval, sortOption),
            myself.trackView.update(),
            $(myself.trackView.viewportDiv).scrollTop(0)
        })
    }
    ,
    igv.BAMTrack.prototype.altClick = function(genomicLocation, event) {
        this.sortAlignmentRows(genomicLocation, this.sortOption)
    }
    ,
    igv.BAMTrack.prototype.getFeatures = function(chr, bpStart, bpEnd, continuation, task) {
        return igv.browser.trackViewportWidthBP() > this.visibilityWindow ? void continuation({
            exceedsVisibilityWindow: !0
        }) : void this.featureSource.getFeatures(chr, bpStart, bpEnd, continuation, task)
    }
    ,
    igv.BAMTrack.prototype.draw = function(options) {
        function drawCoverage(coverageMap) {
            var bp, x, y, w, h, refBase, i, len, item, accumulatedHeight, sequence;
            if (coverageMap.refSeq && (sequence = coverageMap.refSeq.toUpperCase()),
            coverageMap)
                for (w = Math.max(1, Math.ceil(1 / bpPerPixel)),
                i = 0,
                len = coverageMap.coverage.length; len > i; i++)
                    if (bp = coverageMap.bpStart + i,
                    !(bpStart > bp)) {
                        if (bp > bpEnd)
                            break;
                        item = coverageMap.coverage[i],
                        item && (h = item.total / coverageMap.maximum * self.coverageTrackHeight,
                        y = self.coverageTrackHeight - h,
                        x = Math.floor((bp - bpStart) / bpPerPixel),
                        igv.graphics.setProperties(ctx, {
                            fillStyle: self.color,
                            strokeStyle: self.color
                        }),
                        igv.graphics.fillRect(ctx, x, y, w, h),
                        sequence && (refBase = sequence[i],
                        item.isMismatch(refBase) && (igv.graphics.setProperties(ctx, {
                            fillStyle: igv.nucleotideColors[refBase]
                        }),
                        igv.graphics.fillRect(ctx, x, y, w, h),
                        accumulatedHeight = 0,
                        ["A", "C", "T", "G"].forEach(function(nucleotide) {
                            var count, hh;
                            count = item["pos" + nucleotide] + item["neg" + nucleotide],
                            hh = count / coverageMap.maximum * self.coverageTrackHeight,
                            y = self.coverageTrackHeight - hh - accumulatedHeight,
                            accumulatedHeight += hh,
                            igv.graphics.setProperties(ctx, {
                                fillStyle: igv.nucleotideColors[nucleotide]
                            }),
                            igv.graphics.fillRect(ctx, x, y, w, hh)
                        }))))
                    }
        }
        function drawAlignments(genomicInterval) {
            var packedAlignmentRows = genomicInterval.packedAlignmentRows
              , sequence = genomicInterval.sequence;
            sequence && (sequence = sequence.toUpperCase()),
            packedAlignmentRows && packedAlignmentRows.forEach(function(alignmentRow, i) {
                var yStrokedLine, yRect, height, outlineColor, widthArrowHead = self.alignmentRowHeight / 2;
                yRect = self.alignmentRowYInset + self.coverageTrackHeight + self.alignmentRowHeight * i + 5,
                height = self.alignmentRowHeight - 2 * self.alignmentRowYInset,
                yStrokedLine = height / 2 + yRect,
                alignmentRow.alignments.forEach(function(alignment, indexAlignment) {
                    var canvasColor, xBlockEnd;
                    !0 !== alignment.hidden && (alignment.start + alignment.lengthOnRef < bpStart || alignment.start > bpEnd || (canvasColor = igv.BAMTrack.alignmentShadingOptions[self.alignmentShading](self, alignment),
                    outlineColor = canvasColor,
                    alignment.mq <= 0 && (canvasColor = igv.addAlphaToRGB(canvasColor, "0.15")),
                    igv.graphics.setProperties(ctx, {
                        fillStyle: canvasColor,
                        strokeStyle: canvasColor
                    }),
                    alignment.blocks.forEach(function(block, indexBlocks) {
                        var widthBlock, refChar, readChar, readQual, xBase, widthBase, colorBase, x, y, refOffset = block.start - bpStart, seqOffset = block.start - genomicInterval.start, xBlockStart = refOffset / bpPerPixel, blockSeq = block.seq.toUpperCase();
                        if (void 0 != block.gapType && void 0 != xBlockEnd && ("D" === block.gapType ? igv.graphics.strokeLine(ctx, xBlockStart, yStrokedLine, xBlockEnd, yStrokedLine, {
                            strokeStyle: deletionColor
                        }) : igv.graphics.strokeLine(ctx, xBlockStart, yStrokedLine, xBlockEnd, yStrokedLine, {
                            strokeStyle: skippedColor
                        })),
                        xBlockEnd = (block.start + block.len - bpStart) / bpPerPixel,
                        widthBlock = Math.max(1, xBlockEnd - xBlockStart),
                        !0 === alignment.strand && indexBlocks === alignment.blocks.length - 1 ? (x = [xBlockStart, xBlockEnd, xBlockEnd + widthArrowHead, xBlockEnd, xBlockStart, xBlockStart],
                        y = [yRect, yRect, yRect + height / 2, yRect + height, yRect + height, yRect],
                        igv.graphics.fillPolygon(ctx, x, y, {
                            fillStyle: canvasColor
                        }),
                        alignment.mq <= 0 && igv.graphics.strokePolygon(ctx, x, y, {
                            strokeStyle: outlineColor
                        })) : !1 === alignment.strand && 0 === indexBlocks ? (x = [xBlockEnd, xBlockStart, xBlockStart - widthArrowHead, xBlockStart, xBlockEnd, xBlockEnd],
                        y = [yRect, yRect, yRect + height / 2, yRect + height, yRect + height, yRect],
                        igv.graphics.fillPolygon(ctx, x, y, {
                            fillStyle: canvasColor
                        }),
                        alignment.mq <= 0 && igv.graphics.strokePolygon(ctx, x, y, {
                            strokeStyle: outlineColor
                        })) : (igv.graphics.fillRect(ctx, xBlockStart, yRect, widthBlock, height, {
                            fillStyle: canvasColor
                        }),
                        alignment.mq <= 0 && (ctx.save(),
                        ctx.strokeStyle = outlineColor,
                        ctx.strokeRect(xBlockStart, yRect, widthBlock, height),
                        ctx.restore())),
                        sequence && "*" !== blockSeq)
                            for (var i = 0, len = blockSeq.length; len > i; i++)
                                readChar = blockSeq.charAt(i),
                                refChar = sequence.charAt(seqOffset + i),
                                "=" === readChar && (readChar = refChar),
                                ("X" === readChar || refChar !== readChar) && (block.qual && block.qual.length > i ? (readQual = block.qual[i],
                                colorBase = shadedBaseColor(readQual, readChar, i + block.start)) : colorBase = igv.nucleotideColors[readChar],
                                colorBase && (xBase = (block.start + i - bpStart) / bpPerPixel,
                                widthBase = Math.max(1, 1 / bpPerPixel),
                                igv.graphics.fillRect(ctx, xBase, yRect, widthBase, height, {
                                    fillStyle: colorBase
                                })))
                    }),
                    alignment.insertions && alignment.insertions.forEach(function(block, indexBlocks) {
                        var refOffset = block.start - bpStart
                          , xBlockStart = refOffset / bpPerPixel - 1
                          , widthBlock = 3;
                        igv.graphics.fillRect(ctx, xBlockStart, yRect - 1, widthBlock, height + 2, {
                            fillStyle: self.insertionColor
                        })
                    })))
                })
            })
        }
        var self = this
          , genomicInterval = options.features
          , ctx = options.context
          , bpPerPixel = options.bpPerPixel
          , bpStart = options.bpStart
          , pixelWidth = options.pixelWidth
          , skippedColor = (options.pixelHeight,
        this.skippedColor)
          , deletionColor = this.deletionColor
          , bpEnd = bpStart + pixelWidth * bpPerPixel + 1
          , zoomInNoticeFontStyle = {
            font: "16px PT Sans",
            fillStyle: "rgba(64, 64, 64, 1)",
            strokeStyle: "rgba(64, 64, 64, 1)"
        };
        if (genomicInterval.exceedsVisibilityWindow)
            for (var x = 200; pixelWidth > x; x += 400)
                igv.graphics.fillText(ctx, "Zoom in to see alignments", x, 20, zoomInNoticeFontStyle);
        else
            genomicInterval && (drawCoverage(genomicInterval.coverageMap),
            drawAlignments(genomicInterval))
    }
    ,
    igv.BAMTrack.prototype.popupData = function(genomicLocation, xOffset, yOffset) {
        var coverageMapIndex, coverage, packedAlignmentsIndex, alignmentRow, alignment, coverageMap = this.featureSource.genomicInterval.coverageMap, packedAlignmentRows = this.featureSource.genomicInterval.packedAlignmentRows, nameValues = [];
        if (packedAlignmentsIndex = Math.floor((yOffset - (this.alignmentRowYInset + this.coverageTrackHeight)) / this.alignmentRowHeight),
        0 > packedAlignmentsIndex)
            coverageMapIndex = genomicLocation - coverageMap.bpStart,
            coverage = coverageMap.coverage[coverageMapIndex],
            coverage && (nameValues.push(igv.browser.referenceFrame.chr + ":" + igv.numberFormatter(1 + genomicLocation)),
            nameValues.push({
                name: "Total Count",
                value: coverage.total
            }),
            tmp = coverage.posA + coverage.negA,
            tmp > 0 && (tmp = tmp.toString() + " (" + Math.floor((coverage.posA + coverage.negA) / coverage.total * 100) + "%)"),
            nameValues.push({
                name: "A",
                value: tmp
            }),
            tmp = coverage.posC + coverage.negC,
            tmp > 0 && (tmp = tmp.toString() + " (" + Math.floor(tmp / coverage.total * 100) + "%)"),
            nameValues.push({
                name: "C",
                value: tmp
            }),
            tmp = coverage.posG + coverage.negG,
            tmp > 0 && (tmp = tmp.toString() + " (" + Math.floor(tmp / coverage.total * 100) + "%)"),
            nameValues.push({
                name: "G",
                value: tmp
            }),
            tmp = coverage.posT + coverage.negT,
            tmp > 0 && (tmp = tmp.toString() + " (" + Math.floor(tmp / coverage.total * 100) + "%)"),
            nameValues.push({
                name: "T",
                value: tmp
            }),
            tmp = coverage.posN + coverage.negN,
            tmp > 0 && (tmp = tmp.toString() + " (" + Math.floor(tmp / coverage.total * 100) + "%)"),
            nameValues.push({
                name: "N",
                value: tmp
            }));
        else if (packedAlignmentsIndex < packedAlignmentRows.length) {
            alignmentRow = packedAlignmentRows[packedAlignmentsIndex],
            alignment = void 0;
            for (var tmp, i = 0, len = alignmentRow.alignments.length; len > i; i++)
                if (tmp = alignmentRow.alignments[i],
                tmp.start <= genomicLocation && tmp.start + tmp.lengthOnRef >= genomicLocation) {
                    alignment = tmp;
                    break
                }
            if (alignment)
                return alignment.popupData(genomicLocation)
        }
        return nameValues
    }
    ,
    igv.BAMTrack.prototype.popupMenuItems = function(popover) {
        var myself = this
          , menuItems = []
          , lut = {
            none: "Color: None",
            strand: "Color: Read Strand"
        }
          , checkMark = '<i class="fa fa-check fa-check-shim"></i>'
          , checkMarkNone = '<i class="fa fa-check fa-check-shim fa-check-hidden"></i>'
          , trackMenuItem = '<div class="igv-track-menu-item">'
          , trackMenuItemFirst = '<div class="igv-track-menu-item igv-track-menu-border-top">';
        return menuItems.push(igv.colorPickerMenuItem(popover, this.trackView)),
        ["none", "strand"].forEach(function(alignmentShading, index) {
            var chosen, str;
            chosen = 0 === index ? trackMenuItemFirst : trackMenuItem,
            str = alignmentShading === myself.alignmentShading ? chosen + checkMark + lut[alignmentShading] + "</div>" : chosen + checkMarkNone + lut[alignmentShading] + "</div>",
            menuItems.push({
                object: $(str),
                click: function() {
                    popover.hide(),
                    myself.alignmentShading = alignmentShading,
                    myself.trackView.update()
                }
            })
        }),
        menuItems
    }
    ,
    igv.BAMTrack.prototype.computePixelHeight = function(features) {
        return features.packedAlignmentRows ? this.alignmentRowYInset + this.coverageTrackHeight + this.alignmentRowHeight * features.packedAlignmentRows.length + 5 : this.height
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    return igv.BGZip = function(url, headers) {}
    ,
    igv.unbgzf = function(data, lim) {
        var oBlockList = []
          , ptr = [0]
          , totalSize = 0;
        for (lim = lim || data.byteLength - 18; ptr[0] < lim; ) {
            var ba = new Uint8Array(data,ptr[0],18)
              , xlen = ba[11] << 8 | ba[10]
              , bsize = (ba[12],
            ba[13],
            ba[15] << 8 | ba[14],
            ba[17] << 8 | ba[16] + 1)
              , start = 12 + xlen + ptr[0]
              , length = data.byteLength - start;
            if (bsize + 8 > length)
                break;
            var unc = jszlib_inflate_buffer(data, start, length, ptr);
            ptr[0] += 8,
            totalSize += unc.byteLength,
            oBlockList.push(unc)
        }
        if (1 == oBlockList.length)
            return oBlockList[0];
        for (var out = new Uint8Array(totalSize), cursor = 0, i = 0; i < oBlockList.length; ++i) {
            var b = new Uint8Array(oBlockList[i]);
            arrayCopy(b, 0, out, cursor, b.length),
            cursor += b.length
        }
        return out.buffer
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    function Coverage() {
        this.posA = 0,
        this.negA = 0,
        this.posT = 0,
        this.negT = 0,
        this.posC = 0,
        this.negC = 0,
        this.posG = 0,
        this.negG = 0,
        this.posN = 0,
        this.negN = 0,
        this.pos = 0,
        this.neg = 0,
        this.qualA = 0,
        this.qualT = 0,
        this.qualC = 0,
        this.qualG = 0,
        this.qualN = 0,
        this.qual = 0,
        this.total = 0
    }
    return igv.CoverageMap = function(chr, start, end, alignments, refSeq) {
        var myself = this;
        this.refSeq = refSeq,
        this.chr = chr,
        this.bpStart = start,
        this.length = end - start,
        this.coverage = new Array(this.length),
        this.maximum = 0,
        alignments.forEach(function(alignment) {
            alignment.blocks.forEach(function(block) {
                var key, base, i, j, q;
                for (i = block.start - myself.bpStart,
                j = 0; j < block.len; i++,
                j++)
                    myself.coverage[i] || (myself.coverage[i] = new Coverage),
                    base = block.seq.charAt(j),
                    key = alignment.strand ? "pos" + base : "neg" + base,
                    q = block.qual[j],
                    myself.coverage[i][key] += 1,
                    myself.coverage[i]["qual" + base] += q,
                    myself.coverage[i].total += 1,
                    myself.coverage[i].qual += q,
                    myself.maximum = Math.max(myself.coverage[i].total, myself.maximum)
            })
        })
    }
    ,
    igv.CoverageMap.threshold = .2,
    igv.CoverageMap.qualityWeight = !0,
    Coverage.prototype.isMismatch = function(refBase) {
        var mismatchQualitySum, myself = this, threshold = igv.CoverageMap.threshold * (igv.CoverageMap.qualityWeight && this.qual ? this.qual : this.total);
        return mismatchQualitySum = 0,
        ["A", "T", "C", "G"].forEach(function(base) {
            base !== refBase && (mismatchQualitySum += igv.CoverageMap.qualityWeight && myself.qual ? myself["qual" + base] : myself["pos" + base] + myself["neg" + base])
        }),
        mismatchQualitySum >= threshold
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    return igv.BufferedReader = function(config, contentLength, bufferSize) {
        this.path = config.url,
        this.contentLength = contentLength,
        this.bufferSize = bufferSize ? bufferSize : 512e3,
        this.range = {
            start: -1,
            size: -1
        },
        this.config = config
    }
    ,
    igv.BufferedReader.prototype.dataViewForRange = function(requestedRange, continutation, asUint8) {
        function subbuffer(bufferedReader, requestedRange, asUint8) {
            var len = bufferedReader.data.byteLength
              , bufferStart = requestedRange.start - bufferedReader.range.start
              , result = asUint8 ? new Uint8Array(bufferedReader.data,bufferStart,len - bufferStart) : new DataView(bufferedReader.data,bufferStart,len - bufferStart);
            continutation(result)
        }
        var bufferSize, loadRange, self = this, hasData = this.data && this.range.start <= requestedRange.start && this.range.start + this.range.size >= requestedRange.start + requestedRange.size;
        hasData ? subbuffer(self, requestedRange, asUint8) : (bufferSize = Math.max(this.bufferSize, requestedRange.size),
        loadRange = this.contentLength > 0 && requestedRange.start + bufferSize > this.contentLength ? {
            start: requestedRange.start
        } : {
            start: requestedRange.start,
            size: bufferSize
        },
        igvxhr.loadArrayBuffer(self.path, {
            headers: this.config.headers,
            range: loadRange,
            success: function(arrayBuffer) {
                self.data = arrayBuffer,
                self.range = loadRange,
                subbuffer(self, requestedRange, asUint8)
            }
        }))
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    return igv.BPTree = function(binaryParser, treeOffset) {
        function readTreeNode(byteBuffer, offset, keySize, dictionary) {
            offset >= 0 && (byteBuffer.position = offset);
            var i, key, chromId, chromSize, childOffset, bufferOffset, type = byteBuffer.getByte(), count = (byteBuffer.getByte(),
            byteBuffer.getShort());
            if (1 == type)
                for (i = 0; count > i; i++)
                    key = byteBuffer.getFixedLengthString(keySize).trim(),
                    genome && (key = genome.getChromosomeName(key)),
                    chromId = byteBuffer.getInt(),
                    chromSize = byteBuffer.getInt(),
                    dictionary[key] = chromId;
            else
                for (i = 0; count > i; i++)
                    childOffset = byteBuffer.nextLong(),
                    bufferOffset = childOffset - self.treeOffset,
                    readTreeNode(byteBuffer, offset, keySize, dictionary)
        }
        var genome = igv.browser ? igv.browser.genome : null ;
        this.treeOffset = treeOffset,
        this.header = {},
        this.header.magic = binaryParser.getInt(),
        this.header.blockSize = binaryParser.getInt(),
        this.header.keySize = binaryParser.getInt(),
        this.header.valSize = binaryParser.getInt(),
        this.header.itemCount = binaryParser.getLong(),
        this.header.reserved = binaryParser.getLong(),
        this.dictionary = {},
        readTreeNode(binaryParser, -1, this.header.keySize, this.dictionary)
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    function RPTreeNode(items) {
        this.items = items;
        var i, item, minChromId = Number.MAX_VALUE, maxChromId = 0, minStartBase = Number.MAX_VALUE, maxEndBase = 0;
        for (i = 0; i < items.length; i++)
            item = items[i],
            minChromId = Math.min(minChromId, item.startChrom),
            maxChromId = Math.max(maxChromId, item.endChrom),
            minStartBase = Math.min(minStartBase, item.startBase),
            maxEndBase = Math.max(maxEndBase, item.endBase);
        this.startChrom = minChromId,
        this.endChrom = maxChromId,
        this.startBase = minStartBase,
        this.endBase = maxEndBase
    }
    function overlaps(item, chrIdx, startBase, endBase) {
        return item ? (chrIdx > item.startChrom || chrIdx == item.startChrom && endBase >= item.startBase) && (chrIdx < item.endChrom || chrIdx == item.endChrom && startBase < item.endBase) : (console.log("null item"),
        !1)
    }
    var RPTREE_HEADER_SIZE = 48
      , RPTREE_NODE_LEAF_ITEM_SIZE = 32;
    RPTREE_NODE_CHILD_ITEM_SIZE = 24;
    var BUFFER_SIZE = 512e3;
    return igv.RPTree = function(fileOffset, contentLength, config, littleEndian) {
        this.config = config,
        this.filesize = contentLength,
        this.fileOffset = fileOffset,
        this.path = config.url,
        this.littleEndian = littleEndian
    }
    ,
    igv.RPTree.prototype.load = function(continuation) {
        var tree = this
          , rootNodeOffset = this.fileOffset + RPTREE_HEADER_SIZE
          , bufferedReader = new igv.BufferedReader(this.config,this.filesize,BUFFER_SIZE);
        this.readNode(rootNodeOffset, bufferedReader, function(node) {
            tree.rootNode = node,
            continuation(tree)
        })
    }
    ,
    igv.RPTree.prototype.readNode = function(filePosition, bufferedReader, continuation) {
        bufferedReader.dataViewForRange({
            start: filePosition,
            size: 4
        }, function(dataView) {
            var binaryParser = new igv.BinaryParser(dataView,this.littleEndian)
              , type = binaryParser.getByte()
              , isLeaf = 1 === type ? !0 : !1
              , count = (binaryParser.getByte(),
            binaryParser.getShort());
            filePosition += 4;
            var bytesRequired = count * (isLeaf ? RPTREE_NODE_LEAF_ITEM_SIZE : RPTREE_NODE_CHILD_ITEM_SIZE)
              , range2 = {
                start: filePosition,
                size: bytesRequired
            };
            bufferedReader.dataViewForRange(range2, function(dataView) {
                var i, items = new Array(count), binaryParser = new igv.BinaryParser(dataView);
                if (isLeaf) {
                    for (i = 0; count > i; i++) {
                        var item = {
                            isLeaf: !0,
                            startChrom: binaryParser.getInt(),
                            startBase: binaryParser.getInt(),
                            endChrom: binaryParser.getInt(),
                            endBase: binaryParser.getInt(),
                            dataOffset: binaryParser.getLong(),
                            dataSize: binaryParser.getLong()
                        };
                        items[i] = item
                    }
                    continuation(new RPTreeNode(items))
                } else {
                    for (i = 0; count > i; i++) {
                        var item = {
                            isLeaf: !1,
                            startChrom: binaryParser.getInt(),
                            startBase: binaryParser.getInt(),
                            endChrom: binaryParser.getInt(),
                            endBase: binaryParser.getInt(),
                            childOffset: binaryParser.getLong()
                        };
                        items[i] = item
                    }
                    continuation(new RPTreeNode(items))
                }
            })
        })
    }
    ,
    igv.RPTree.prototype.findLeafItemsOverlapping = function(chrIdx, startBase, endBase, continuation) {
        function findLeafItems(node, nodeId) {
            if (overlaps(node, chrIdx, startBase, endBase)) {
                var items = node.items;
                items.forEach(function(item) {
                    overlaps(item, chrIdx, startBase, endBase) && (item.isLeaf ? leafItems.push(item) : item.childNode ? findLeafItems(item.childNode) : (processing.add(item.childOffset),
                    rpTree.readNode(item.childOffset, bufferedReader, function(node) {
                        item.childNode = node,
                        findLeafItems(node, item.childOffset)
                    })))
                })
            }
            void 0 != nodeId && processing["delete"](nodeId),
            processing.isEmpty() && continuation(leafItems)
        }
        var rpTree = this
          , leafItems = []
          , processing = new Set
          , bufferedReader = new igv.BufferedReader(this.config,this.filesize,BUFFER_SIZE);
        processing.add(0),
        findLeafItems(this.rootNode, 0)
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    function loadZoomHeadersAndChrTree(continutation) {
        var startOffset = BBFILE_HEADER_SIZE
          , self = this;
        igvxhr.loadArrayBuffer(this.path, {
            headers: self.config.headers,
            range: {
                start: startOffset,
                size: this.header.fullDataOffset - startOffset + 5
            },
            success: function(data) {
                var i, zoomNumber, zlh, nZooms = self.header.nZoomLevels, binaryParser = new igv.BinaryParser(new DataView(data));
                for (self.zoomLevelHeaders = [],
                self.firstZoomDataOffset = Number.MAX_VALUE,
                i = 0; nZooms > i; i++)
                    zoomNumber = nZooms - i,
                    zlh = new ZoomLevelHeader(zoomNumber,binaryParser),
                    self.firstZoomDataOffset = Math.min(zlh.dataOffset, self.firstZoomDataOffset),
                    self.zoomLevelHeaders.push(zlh);
                self.header.autoSqlOffset > 0 && (binaryParser.position = self.header.autoSqlOffset - startOffset,
                self.autoSql = binaryParser.getString()),
                self.header.totalSummaryOffset > 0 && (binaryParser.position = self.header.totalSummaryOffset - startOffset,
                self.totalSummary = new igv.BWTotalSummary(binaryParser)),
                self.header.chromTreeOffset > 0 && (binaryParser.position = self.header.chromTreeOffset - startOffset,
                self.chromTree = new igv.BPTree(binaryParser,0)),
                binaryParser.position = self.header.fullDataOffset - startOffset,
                self.dataCount = binaryParser.getInt(),
                continutation()
            }
        })
    }
    var BIGWIG_MAGIC_LTH = 2291137574
      , BIGWIG_MAGIC_HTL = 654085990
      , BIGBED_MAGIC_LTH = 2273964779
      , BIGBED_MAGIC_HTL = 3958540679
      , BBFILE_HEADER_SIZE = 64;
    igv.BWReader = function(config) {
        this.path = config.url,
        this.headPath = config.headURL || this.path,
        this.rpTreeCache = {},
        this.config = config
    }
    ,
    igv.BWReader.prototype.getZoomHeaders = function(continuation) {
        var reader = this;
        this.zoomLevelHeaders ? continuation(reader.zoomLevelHeaders) : this.loadHeader(function() {
            continuation(reader.zoomLevelHeaders)
        })
    }
    ,
    igv.BWReader.prototype.loadHeader = function(continuation) {
        var self = this;
        igvxhr.loadArrayBuffer(self.path, {
            headers: self.config.headers,
            range: {
                start: 0,
                size: BBFILE_HEADER_SIZE
            },
            success: function(data) {
                if (data) {
                    self.littleEndian = !0;
                    var binaryParser = new igv.BinaryParser(new DataView(data))
                      , magic = binaryParser.getUInt();
                    if (magic === BIGWIG_MAGIC_LTH)
                        self.type = "BigWig";
                    else if (magic == BIGBED_MAGIC_LTH)
                        self.type = "BigBed";
                    else {
                        self.littleEndian = !1,
                        binaryParser.littleEndian = !1,
                        binaryParser.position = 0;
                        var magic = binaryParser.getUInt();
                        magic === BIGWIG_MAGIC_HTL ? self.type = "BigWig" : magic == BIGBED_MAGIC_HTL && (self.type = "BigBed")
                    }
                    self.header = {},
                    self.header.bwVersion = binaryParser.getShort(),
                    self.header.nZoomLevels = binaryParser.getShort(),
                    self.header.chromTreeOffset = binaryParser.getLong(),
                    self.header.fullDataOffset = binaryParser.getLong(),
                    self.header.fullIndexOffset = binaryParser.getLong(),
                    self.header.fieldCount = binaryParser.getShort(),
                    self.header.definedFieldCount = binaryParser.getShort(),
                    self.header.autoSqlOffset = binaryParser.getLong(),
                    self.header.totalSummaryOffset = binaryParser.getLong(),
                    self.header.uncompressBuffSize = binaryParser.getInt(),
                    self.header.reserved = binaryParser.getLong(),
                    loadZoomHeadersAndChrTree.call(self, continuation)
                }
            }
        })
    }
    ,
    igv.BWReader.prototype.loadRPTree = function(offset, continuation) {
        var rpTree = this.rpTreeCache[offset];
        rpTree ? continuation(rpTree) : (rpTree = new igv.RPTree(offset,this.contentLength,this.config,this.littleEndian),
        this.rpTreeCache[offset] = rpTree,
        rpTree.load(function() {
            continuation(rpTree)
        }))
    }
    ;
    var ZoomLevelHeader = function(index, byteBuffer) {
        this.index = index,
        this.reductionLevel = byteBuffer.getInt(),
        this.reserved = byteBuffer.getInt(),
        this.dataOffset = byteBuffer.getLong(),
        this.indexOffset = byteBuffer.getLong()
    }
    ;
    return igv
}(igv || {})
  , igv = function(igv) {
    function zoomLevelForScale(bpPerPixel, zoomLevelHeaders) {
        var i, zl, level = null ;
        for (i = 0; i < zoomLevelHeaders.length; i++)
            if (zl = zoomLevelHeaders[i],
            zl.reductionLevel > bpPerPixel) {
                level = zl;
                break
            }
        return null  == level && (level = zoomLevelHeaders[zoomLevelHeaders.length - 1]),
        level.reductionLevel < 4 * bpPerPixel ? level : null 
    }
    function decodeWigData(data, chr, chrIdx, bpStart, bpEnd, featureArray) {
        var value, binaryParser = new igv.BinaryParser(data), chromId = binaryParser.getInt(), chromStart = binaryParser.getInt(), chromEnd = binaryParser.getInt(), itemStep = binaryParser.getInt(), itemSpan = binaryParser.getInt(), type = binaryParser.getByte(), itemCount = (binaryParser.getByte(),
        binaryParser.getShort());
        if (chromId === chrIdx)
            for (; itemCount-- > 0; ) {
                switch (type) {
                case 1:
                    chromStart = binaryParser.getInt(),
                    chromEnd = binaryParser.getInt(),
                    value = binaryParser.getFloat();
                    break;
                case 2:
                    chromStart = binaryParser.getInt(),
                    value = binaryParser.getFloat(),
                    chromEnd = chromStart + itemSpan;
                    break;
                case 3:
                    value = binaryParser.getFloat(),
                    chromEnd = chromStart + itemSpan,
                    chromStart += itemStep
                }
                if (chromStart >= bpEnd)
                    break;
                chromEnd > bpStart && featureArray.push({
                    chr: chr,
                    start: chromStart,
                    end: chromEnd,
                    value: value
                })
            }
    }
    function decodeZoomData(data, chr, chrIdx, bpStart, bpEnd, featureArray) {
        for (var chromId, chromStart, chromEnd, validCount, minVal, maxVal, sumData, sumSquares, value, binaryParser = new igv.BinaryParser(data), minSize = 32; binaryParser.remLength() >= minSize; )
            if (chromId = binaryParser.getInt(),
            chromId === chrIdx) {
                if (chromStart = binaryParser.getInt(),
                chromEnd = binaryParser.getInt(),
                validCount = binaryParser.getInt(),
                minVal = binaryParser.getFloat(),
                maxVal = binaryParser.getFloat(),
                sumData = binaryParser.getFloat(),
                sumSquares = binaryParser.getFloat(),
                value = 0 == validCount ? 0 : sumData / validCount,
                chromStart >= bpEnd)
                    break;
                chromEnd > bpStart && featureArray.push({
                    chr: chr,
                    start: chromStart,
                    end: chromEnd,
                    value: value
                })
            }
    }
    function decodeBedData(data, chr, chrIdx, bpStart, bpEnd, featureArray) {
        for (var chromId, chromStart, chromEnd, rest, tokens, feature, exonCount, exonSizes, exonStarts, exons, eStart, eEnd, binaryParser = new igv.BinaryParser(data), minSize = 13; binaryParser.remLength() >= minSize; )
            if (chromId = binaryParser.getInt(),
            chromId == chrIdx && (chromStart = binaryParser.getInt(),
            chromEnd = binaryParser.getInt(),
            rest = binaryParser.getString(),
            feature = {
                chr: chr,
                start: chromStart,
                end: chromEnd
            },
            bpEnd > chromStart && chromEnd >= bpStart && (featureArray.push(feature),
            tokens = rest.split("	"),
            tokens.length > 0 && (feature.name = tokens[0]),
            tokens.length > 1 && (feature.score = parseFloat(tokens[1])),
            tokens.length > 2 && (feature.strand = tokens[2]),
            tokens.length > 3 && (feature.cdStart = parseInt(tokens[3])),
            tokens.length > 4 && (feature.cdEnd = parseInt(tokens[4])),
            tokens.length > 5 && "." !== tokens[5] && "0" !== tokens[5] && (feature.color = igv.createColorString(tokens[5])),
            tokens.length > 8))) {
                exonCount = parseInt(tokens[6]),
                exonSizes = tokens[7].split(","),
                exonStarts = tokens[8].split(","),
                exons = [];
                for (var i = 0; exonCount > i; i++)
                    eStart = start + parseInt(exonStarts[i]),
                    eEnd = eStart + parseInt(exonSizes[i]),
                    exons.push({
                        start: eStart,
                        end: eEnd
                    });
                feature.exons = exons
            }
    }
    return igv.BWSource = function(config) {
        this.reader = new igv.BWReader(config),
        this.bufferedReader = new igv.BufferedReader(config)
    }
    ,
    igv.BWSource.prototype.getFeatures = function(chr, bpStart, bpEnd, continuation) {
        var bwSource = this;
        this.reader.getZoomHeaders(function(zoomLevelHeaders) {
            var treeOffset, decodeFunction, bwReader = bwSource.reader, bufferedReader = bwSource.bufferedReader, bpPerPixel = igv.browser.referenceFrame.bpPerPixel, zoomLevelHeader = zoomLevelForScale(bpPerPixel, zoomLevelHeaders), features = [];
            zoomLevelHeader ? (treeOffset = zoomLevelHeader.indexOffset,
            decodeFunction = decodeZoomData) : (treeOffset = bwReader.header.fullIndexOffset,
            decodeFunction = "BigWig" === bwReader.type ? decodeWigData : decodeBedData),
            bwReader.loadRPTree(treeOffset, function(rpTree) {
                var chrIdx = bwSource.reader.chromTree.dictionary[chr];
                void 0 === chrIdx ? continuation(null ) : rpTree.findLeafItemsOverlapping(chrIdx, bpStart, bpEnd, function(leafItems) {
                    leafItems && 0 != leafItems.length || continuation([]);
                    var leafItemsCount = leafItems.length;
                    leafItems.sort(function(i1, i2) {
                        return i1.startBase - i2.startBase
                    }),
                    leafItems.forEach(function(item) {
                        bufferedReader.dataViewForRange({
                            start: item.dataOffset,
                            size: item.dataSize
                        }, function(uint8Array) {
                            var inflate = new Zlib.Inflate(uint8Array)
                              , plain = inflate.decompress();
                            decodeFunction(new DataView(plain.buffer), chr, chrIdx, bpStart, bpEnd, features),
                            leafItemsCount--,
                            0 == leafItemsCount && continuation(features)
                        }, !0)
                    })
                })
            })
        })
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    function computeStats() {
        var n = this.basesCovered;
        n > 0 && (this.mean = this.sumData / n,
        this.stddev = Math.sqrt((this.sumSquares - this.sumData / n * this.sumData) / (n - 1)))
    }
    return igv.BWTotalSummary = function(byteBuffer) {
        byteBuffer ? (this.basesCovered = byteBuffer.getLong(),
        this.minVal = byteBuffer.getDouble(),
        this.maxVal = byteBuffer.getDouble(),
        this.sumData = byteBuffer.getDouble(),
        this.sumSquares = byteBuffer.getDouble(),
        computeStats.call(this)) : (this.basesCovered = 0,
        this.minVal = 0,
        this.maxVal = 0,
        this.sumData = 0,
        this.sumSquares = 0,
        this.mean = 0,
        this.stddev = 0)
    }
    ,
    igv.BWTotalSummary.prototype.updateStats = function(stats) {
        this.basesCovered += stats.count,
        this.sumData += status.sumData,
        this.sumSquares += sumSquares,
        this.minVal = MIN(_minVal, min),
        this.maxVal = MAX(_maxVal, max),
        computeStats.call(this)
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    function VPointer(block, offset) {
        this.block = block,
        this.offset = offset
    }
    return igv.BinaryParser = function(dataView, littleEndian) {
        this.littleEndian = littleEndian ? littleEndian : !0,
        this.position = 0,
        this.view = dataView,
        this.length = dataView.byteLength
    }
    ,
    igv.BinaryParser.prototype.remLength = function() {
        return this.length - this.position
    }
    ,
    igv.BinaryParser.prototype.hasNext = function() {
        return this.position < this.length - 1
    }
    ,
    igv.BinaryParser.prototype.getByte = function() {
        var retValue = this.view.getUint8(this.position, this.littleEndian);
        return this.position++,
        retValue
    }
    ,
    igv.BinaryParser.prototype.getShort = function() {
        var retValue = this.view.getInt16(this.position, this.littleEndian);
        return this.position += 2,
        retValue
    }
    ,
    igv.BinaryParser.prototype.getInt = function() {
        var retValue = this.view.getInt32(this.position, this.littleEndian);
        return this.position += 4,
        retValue
    }
    ,
    igv.BinaryParser.prototype.getUInt = function() {
        var retValue = this.view.getUint32(this.position, this.littleEndian);
        return this.position += 4,
        retValue
    }
    ,
    igv.BinaryParser.prototype.getLong = function() {
        var byte1 = 255 & this.view.getUint8(this.position++)
          , byte2 = 255 & this.view.getUint8(this.position++)
          , byte3 = 255 & this.view.getUint8(this.position++)
          , byte4 = 255 & this.view.getUint8(this.position++)
          , byte5 = 255 & this.view.getUint8(this.position++)
          , byte6 = 255 & this.view.getUint8(this.position++)
          , byte7 = 255 & this.view.getUint8(this.position++)
          , byte8 = 255 & this.view.getUint8(this.position++);
        return (byte8 << 56) + (byte7 << 56 >>> 8) + (byte6 << 56 >>> 16) + (byte5 << 56 >>> 24) + (byte4 << 56 >>> 32) + (byte3 << 56 >>> 40) + (byte2 << 56 >>> 48) + (byte1 << 56 >>> 56)
    }
    ,
    igv.BinaryParser.prototype.getString = function(len) {
        for (var c, s = ""; 0 != (c = this.view.getUint8(this.position++)) && (s += String.fromCharCode(c),
        !len || s.length != len); )
            ;
        return s
    }
    ,
    igv.BinaryParser.prototype.getFixedLengthString = function(len) {
        var i, c, s = "";
        for (i = 0; len > i; i++)
            c = this.view.getUint8(this.position++),
            c > 0 && (s += String.fromCharCode(c));
        return s
    }
    ,
    igv.BinaryParser.prototype.getFloat = function() {
        var retValue = this.view.getFloat32(this.position, this.littleEndian);
        return this.position += 4,
        retValue
    }
    ,
    igv.BinaryParser.prototype.getDouble = function() {
        var retValue = this.view.getFloat64(this.position, this.littleEndian);
        return this.position += 8,
        retValue
    }
    ,
    igv.BinaryParser.prototype.skip = function(n) {
        return this.position += n,
        this.position
    }
    ,
    igv.BinaryParser.prototype.getVPointer = function() {
        var position = this.position
          , offset = this.view.getUint8(position + 1) << 8 | this.view.getUint8(position)
          , byte6 = 4294967296 * (255 & this.view.getUint8(position + 6))
          , byte5 = 16777216 * (255 & this.view.getUint8(position + 5))
          , byte4 = 65536 * (255 & this.view.getUint8(position + 4))
          , byte3 = 256 * (255 & this.view.getUint8(position + 3))
          , byte2 = 255 & this.view.getUint8(position + 2)
          , block = byte6 + byte5 + byte4 + byte3 + byte2;
        return this.position += 8,
        0 == block && 0 == offset ? null  : new VPointer(block,offset)
    }
    ,
    VPointer.prototype.print = function() {
        return "" + this.block + ":" + this.offset
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    function initialize(options) {
        var genomeId;
        this.flanking = options.flanking,
        this.type = options.type || "IGV",
        this.crossDomainProxy = options.crossDomainProxy,
        this.formats = options.formats,
        this.trackDefaults = options.trackDefaults,
        options.search ? this.searchConfig = {
            type: "json",
            url: options.search.url,
            coords: void 0 === options.search.coords ? 1 : options.search.coords,
            chromosomeField: options.search.chromosomeField || "chromosome",
            startField: options.search.startField || "start",
            endField: options.search.endField || "end",
            resultsField: options.search.resultsField
        } : (genomeId = options.reference && options.reference.id ? options.reference.id : options.genome ? options.genome : "hg19",
        this.searchConfig = {
            type: "plain",
            url: "//www.broadinstitute.org/webservices/igv/locus?genome=" + genomeId + "&name=$FEATURE$",
            coords: 0,
            chromosomeField: "chromosome",
            startField: "start",
            endField: "end"
        })
    }
    function presentSearchResults(loci, config, feature) {
        igv.browser.$searchResultsTable.empty(),
        igv.browser.$searchResults.show(),
        loci.forEach(function(locus) {
            var row = $('<tr class="igvNavigationSearchResultsTableRow">');
            row.text(locus.locusString),
            row.click(function() {
                igv.browser.$searchResults.hide(),
                handleSearchResult(feature, locus[config.chromosomeField], locus[config.startField] - config.coords, locus[config.endField], locus.featureType)
            }),
            igv.browser.$searchResultsTable.append(row)
        })
    }
    function parseSearchResults(data) {
        var lines = data.splitLines()
          , linesTrimmed = []
          , results = [];
        return lines.forEach(function(item) {
            "" === item || linesTrimmed.push(item)
        }),
        linesTrimmed.forEach(function(line) {
            var source, locusTokens, rangeTokens, tokens = line.split("	");
            tokens.length >= 3 && (locusTokens = tokens[1].split(":"),
            rangeTokens = locusTokens[1].split("-"),
            source = tokens[2].trim(),
            results.push({
                chromosome: igv.browser.genome.getChromosomeName(locusTokens[0].trim()),
                start: parseInt(rangeTokens[0].replace(/,/g, "")),
                end: parseInt(rangeTokens[1].replace(/,/g, "")),
                featureType: "gtex" === source ? "snp" : "gene"
            }))
        }),
        results
    }
    function handleSearchResult(name, chr, start, end, type) {
        igv.browser.selection = new igv.GtexSelection("gtex" === type || "snp" === type ? {
            snp: name
        } : {
            gene: name
        }),
        void 0 === end && (end = start + 1),
        igv.browser.flanking && (start = Math.max(0, start - igv.browser.flanking),
        end += igv.browser.flanking),
        igv.browser["goto"](chr, start, end),
        fireOnsearch.call(igv.browser, name, type)
    }
    function fireOnsearch(feature, type) {
        this.trackViews.forEach(function(tp) {
            var track = tp.track;
            track.onsearch && track.onsearch(feature, type)
        })
    }
    function addTrackContainerHandlers(trackContainerDiv) {
        var isRulerTrack = !1
          , isMouseDown = !1
          , lastMouseX = void 0
          , mouseDownX = void 0;
        $(trackContainerDiv).mousedown(function(e) {
            var coords = igv.translateMouseCoordinates(e, trackContainerDiv);
            isRulerTrack = $(e.target).parent().parent().parent()[0].dataset.rulerTrack ? !0 : !1,
            isRulerTrack || (isMouseDown = !0,
            lastMouseX = coords.x,
            mouseDownX = lastMouseX)
        }),
        $(trackContainerDiv).mousemove(igv.throttle(function(e) {
            var maxEnd, maxStart, coords = igv.translateMouseCoordinates(e, trackContainerDiv), referenceFrame = igv.browser.referenceFrame, isCursor = igv.browser.cursorModel;
            if (!isRulerTrack && referenceFrame && isMouseDown) {
                if (mouseDownX && Math.abs(coords.x - mouseDownX) > igv.constants.dragThreshold) {
                    if (referenceFrame.shiftPixels(lastMouseX - coords.x),
                    referenceFrame.start = Math.max(0, referenceFrame.start),
                    isCursor)
                        maxEnd = igv.browser.cursorModel.filteredRegions.length,
                        maxStart = maxEnd - igv.browser.trackViewportWidth() / igv.browser.cursorModel.framePixelWidth;
                    else {
                        var chromosome = igv.browser.genome.getChromosome(referenceFrame.chr);
                        maxEnd = chromosome.bpLength,
                        maxStart = maxEnd - igv.browser.trackViewportWidth() * referenceFrame.bpPerPixel
                    }
                    referenceFrame.start > maxStart && (referenceFrame.start = maxStart),
                    igv.browser.updateLocusSearch(referenceFrame),
                    igv.browser.repaint()
                }
                lastMouseX = coords.x
            }
        }, 10)),
        $(trackContainerDiv).mouseup(function(e) {
            isRulerTrack || (mouseDownX = void 0,
            isMouseDown = !1,
            lastMouseX = void 0)
        }),
        $(trackContainerDiv).mouseleave(function(e) {
            isRulerTrack || (isMouseDown = !1,
            lastMouseX = void 0,
            mouseDownX = void 0)
        }),
        $(trackContainerDiv).dblclick(function(e) {
            if (!isRulerTrack && !e.altKey) {
                e = $.event.fix(e);
                var canvasCoords = igv.translateMouseCoordinates(e, trackContainerDiv)
                  , referenceFrame = igv.browser.referenceFrame;
                if (referenceFrame) {
                    var newCenter = Math.round(referenceFrame.start + canvasCoords.x * referenceFrame.bpPerPixel);
                    referenceFrame.bpPerPixel /= 2,
                    igv.browser.cursorModel && (igv.browser.cursorModel.framePixelWidth *= 2),
                    igv.browser["goto"](referenceFrame.chr, newCenter)
                }
            }
        })
    }
    return igv.Browser = function(options, trackContainer) {
        igv.browser = this,
        this.div = $('<div id="igvRootDiv" class="igv-root-div">')[0],
        initialize.call(this, options),
        $("input[id='trackHeightInput']").val(this.trackHeight),
        this.trackContainerDiv = trackContainer,
        addTrackContainerHandlers(trackContainer),
        this.trackViews = [],
        this.trackLabelsVisible = !0,
        this.featureDB = {},
        window.onresize = igv.throttle(function() {
            igv.browser.resize()
        }, 10)
    }
    ,
    igv.Browser.prototype.getFormat = function(name) {
        return void 0 === this.formats ? void 0 : this.formats[name]
    }
    ,
    igv.Browser.prototype.trackLabelWithPath = function(path) {
        var label, parser = document.createElement("a");
        return parser.href = path,
        label = parser.pathname.split("/"),
        label[label.length - 1].split(".")[0]
    }
    ,
    igv.Browser.prototype.loadTracksWithConfigList = function(configList) {
        var self = this;
        configList.forEach(function(config) {
            self.loadTrack(config)
        })
    }
    ,
    igv.Browser.prototype.loadTrack = function(config) {
        function loadHeader(track) {
            track.getHeader ? track.getHeader(function(header) {
                self.addTrack(track)
            }) : self.addTrack(newTrack)
        }
        var settings, property, self = this;
        if (!this.isDuplicateTrack(config)) {
            if (this.trackDefaults && config.trackType && (settings = this.trackDefaults[config.trackType]))
                for (property in settings)
                    settings.hasOwnProperty(property) && void 0 === config[property] && (config[property] = settings[property]);
            igv.inferTypes(config);
            var newTrack, path = config.url, type = config.featureType;
            switch (type) {
            case "gwas":
                newTrack = new igv.GWASTrack(config);
                break;
            case "annotation":
            case "genes":
            case "variant":
            case "FusionJuncSpan":
                newTrack = new igv.FeatureTrack(config);
                break;
            case "alignment":
                newTrack = new igv.BAMTrack(config);
                break;
            case "data":
                newTrack = new igv.WIGTrack(config);
                break;
            case "sequence":
                newTrack = new igv.SequenceTrack(config);
                break;
            case "eqtl":
                newTrack = new igv.EqtlTrack(config);
                break;
            case "seg":
                newTrack = new igv.SegTrack(config);
                break;
            case "aneu":
                newTrack = new igv.AneuTrack(config);
                break;
            default:
                return alert("Unknown file type: " + path),
                null 
            }
            loadHeader(newTrack)
        }
    }
    ,
    igv.Browser.prototype.isDuplicateTrack = function(config) {
        var attemptedDuplicateTrackAddition = !1;
        return this.trackViews.forEach(function(tp) {
            !1 === attemptedDuplicateTrackAddition && JSON.stringify(config) === JSON.stringify(tp.track.config) && (attemptedDuplicateTrackAddition = !0)
        }),
        !0 === attemptedDuplicateTrackAddition ? (window.alert("Attempt to load duplicate track."),
        !0) : !1
    }
    ,
    igv.Browser.prototype.addTrack = function(track) {
        var myself = this
          , trackView = new igv.TrackView(track,this);
        igv.popover && igv.popover.hide(),
        track.trackView = trackView,
        void 0 === track.order && (track.order = this.trackViews.length),
        this.trackViews.push(trackView),
        this.reorderTracks(),
        this.cursorModel ? this.cursorModel.initializeHistogram(trackView.track, function() {
            myself.designatedTrack === track && myself.selectDesignatedTrack(myself.designatedTrack.trackFilter.trackPanel),
            track.config && track.config.trackFilter && track.trackFilter.setWithJSON(track.config.trackFilter),
            myself.resize()
        }) : this.resize()
    }
    ,
    igv.Browser.prototype.reorderTracks = function() {
        var myself = this;
        this.trackViews.sort(function(a, b) {
            var aOrder = a.track.order || 0
              , bOrder = b.track.order || 0;
            return aOrder - bOrder
        }),
        $(this.trackContainerDiv).children().detach(),
        this.trackViews.forEach(function(trackView, index, trackViews) {
            "CURSOR" === myself.type ? myself.trackContainerDiv.appendChild(trackView.cursorTrackContainer) : myself.trackContainerDiv.appendChild(trackView.trackDiv)
        })
    }
    ,
    igv.Browser.prototype.removeTrack = function(track) {
        for (var trackPanelRemoved, i = 0; i < this.trackViews.length; i++)
            if (track === this.trackViews[i].track) {
                trackPanelRemoved = this.trackViews[i];
                break
            }
        trackPanelRemoved && (this.trackViews.splice(this.trackViews.indexOf(trackPanelRemoved), 1),
        "CURSOR" === this.type ? this.trackContainerDiv.removeChild(trackPanelRemoved.cursorTrackContainer) : this.trackContainerDiv.removeChild(trackPanelRemoved.trackDiv))
    }
    ,
    igv.Browser.prototype.reduceTrackOrder = function(trackView) {
        var raisable, raiseableOrder, indices = [];
        1 !== this.trackViews.length && (this.trackViews.forEach(function(tv, i, tvs) {
            indices.push({
                trackView: tv,
                index: i
            }),
            trackView === tv && (raisable = indices[i])
        }),
        0 !== raisable.index && (raiseableOrder = raisable.trackView.track.order,
        raisable.trackView.track.order = indices[raisable.index - 1].trackView.track.order,
        indices[raisable.index - 1].trackView.track.order = raiseableOrder,
        this.reorderTracks()))
    }
    ,
    igv.Browser.prototype.increaseTrackOrder = function(trackView) {
        var raisable, raiseableOrder, indices = [];
        1 !== this.trackViews.length && (this.trackViews.forEach(function(tv, i, tvs) {
            indices.push({
                trackView: tv,
                index: i
            }),
            trackView === tv && (raisable = indices[i])
        }),
        this.trackViews.length - 1 !== raisable.index && (raiseableOrder = raisable.trackView.track.order,
        raisable.trackView.track.order = indices[1 + raisable.index].trackView.track.order,
        indices[1 + raisable.index].trackView.track.order = raiseableOrder,
        this.reorderTracks()))
    }
    ,
    igv.Browser.prototype.setTrackHeight = function(newHeight) {
        this.trackHeight = newHeight,
        this.trackViews.forEach(function(panel) {
            panel.setTrackHeight(newHeight)
        })
    }
    ,
    igv.Browser.prototype.resize = function() {
        this.ideoPanel && this.ideoPanel.resize(),
        this.karyoPanel && this.karyoPanel.resize(),
        this.trackViews.forEach(function(panel) {
            panel.resize()
        })
    }
    ,
    igv.Browser.prototype.repaint = function() {
        this.ideoPanel && this.ideoPanel.repaint(),
        this.karyoPanel && this.karyoPanel.repaint(),
        this.trackViews.forEach(function(trackView) {
            trackView.repaint()
        }),
        this.cursorModel && this.horizontalScrollbar.update()
    }
    ,
    igv.Browser.prototype.update = function() {
        this.updateLocusSearch(this.referenceFrame),
        this.ideoPanel && this.ideoPanel.repaint(),
        this.karyoPanel && this.karyoPanel.repaint(),
        this.trackViews.forEach(function(trackPanel) {
            trackPanel.update()
        }),
        this.cursorModel && this.horizontalScrollbar.update()
    }
    ,
    igv.Browser.prototype.updateLocusSearch = function(referenceFrame) {
        var chr, ss, ee, str, end, chromosome;
        this.searchInput && (chr = referenceFrame.chr,
        ss = igv.numberFormatter(Math.floor(referenceFrame.start + 1)),
        end = referenceFrame.start + this.trackViewportWidthBP(),
        this.genome && (chromosome = this.genome.getChromosome(chr),
        chromosome && (end = Math.min(end, chromosome.bpLength))),
        ee = igv.numberFormatter(Math.floor(end)),
        str = chr + ":" + ss + "-" + ee,
        this.searchInput.val(str),
        this.windowSizePanel.update(Math.floor(end - referenceFrame.start)))
    }
    ,
    igv.Browser.prototype.trackViewportWidth = function() {
        var width;
        return width = this.trackViews && this.trackViews.length > 0 ? this.trackViews[0].viewportDiv.clientWidth : this.trackContainerDiv.clientWidth
    }
    ,
    igv.Browser.prototype.pixelPerBasepairThreshold = function() {
        return 14
    }
    ,
    igv.Browser.prototype.trackViewportWidthBP = function() {
        return this.referenceFrame.bpPerPixel * this.trackViewportWidth()
    }
    ,
    igv.Browser.prototype.removeAllTracks = function() {
        for (var tracks = this.trackViews, i = 0; i < tracks.length; i++) {
            var track = this.trackViews[i].track;
            this.removeTrack(track)
        }
    }
    ,
    igv.Browser.prototype.setGotoCallback = function(gotocallback) {
        this.gotocallback = gotocallback
    }
    ,
    igv.Browser.prototype["goto"] = function(chr, start, end) {
        "undefined" != typeof this.gotocallback && this.gotocallback(chr, start, end);
        var w, chromosome, viewportWidth = this.trackViewportWidth();
        if (igv.popover && igv.popover.hide(),
        this.genome && (chr = this.genome.getChromosomeName(chr)),
        this.referenceFrame.chr = chr,
        end ? this.referenceFrame.bpPerPixel = (end - start) / viewportWidth : (w = Math.round(viewportWidth * this.referenceFrame.bpPerPixel / 2),
        start = Math.max(0, start - w)),
        this.genome)
            if (chromosome = this.genome.getChromosome(this.referenceFrame.chr)) {
                chromosome.bpLength || (chromosome.bpLength = 1);
                var maxBpPerPixel = chromosome.bpLength / viewportWidth;
                this.referenceFrame.bpPerPixel > maxBpPerPixel && (this.referenceFrame.bpPerPixel = maxBpPerPixel),
                end || (end = start + viewportWidth * this.referenceFrame.bpPerPixel),
                chromosome && end > chromosome.bpLength && (start -= end - chromosome.bpLength)
            } else
                console && console.log && console.log("Could not find chromsome " + this.referenceFrame.chr);
        this.referenceFrame.start = start,
        this.update()
    }
    ,
    igv.Browser.prototype.zoomIn = function() {
        var newScale, center, viewportWidth;
        viewportWidth = this.trackViewportWidth(),
        newScale = Math.max(1 / this.pixelPerBasepairThreshold(), this.referenceFrame.bpPerPixel / 2),
        newScale !== this.referenceFrame.bpPerPixel && (center = this.referenceFrame.start + this.referenceFrame.bpPerPixel * viewportWidth / 2,
        this.referenceFrame.start = center - newScale * viewportWidth / 2,
        this.referenceFrame.bpPerPixel = newScale,
        this.update())
    }
    ,
    igv.Browser.prototype.zoomOut = function() {
        var newScale, maxScale, center, chrLength, widthBP, viewportWidth;
        if (viewportWidth = this.trackViewportWidth(),
        newScale = 2 * this.referenceFrame.bpPerPixel,
        chrLength = 25e7,
        this.genome) {
            var chromosome = this.genome.getChromosome(this.referenceFrame.chr);
            chromosome && (chrLength = chromosome.bpLength)
        }
        maxScale = chrLength / viewportWidth,
        newScale > maxScale && (newScale = maxScale),
        center = this.referenceFrame.start + this.referenceFrame.bpPerPixel * viewportWidth / 2,
        widthBP = newScale * viewportWidth,
        this.referenceFrame.start = Math.round(center - widthBP / 2),
        this.referenceFrame.start < 0 ? this.referenceFrame.start = 0 : this.referenceFrame.start > chrLength - widthBP && (this.referenceFrame.start = chrLength - widthBP),
        this.referenceFrame.bpPerPixel = newScale,
        this.update()
    }
    ,
    igv.Browser.prototype.search = function(feature, continuation) {
        if (void 0 === igv.browser || void 0 === igv.browser.genome)
            return igv.browser.initialLocus = feature,
            void (continuation && continuation());
        var type, chr, posTokens, start, end, searchConfig, tokens, url, chromosome, result;
        if (feature.contains(":") && feature.contains("-") || this.genome.getChromosome(feature))
            type = "locus",
            tokens = feature.split(":"),
            chr = this.genome.getChromosomeName(tokens[0]),
            1 == tokens.length ? (chromosome = this.genome.getChromosome(feature),
            start = 0,
            end = chromosome.bpLength) : (posTokens = tokens[1].split("-"),
            start = parseInt(posTokens[0].replace(/,/g, "")) - 1,
            end = parseInt(posTokens[1].replace(/,/g, ""))),
            end > start && (this["goto"](chr, start, end),
            fireOnsearch.call(igv.browser, feature, type)),
            continuation && continuation();
        else if (result = this.featureDB[feature.toUpperCase()])
            handleSearchResult(result.name, result.chr, result.start, result.end, "");
        else if (this.searchConfig) {
            if (url = this.searchConfig.url.replace("$FEATURE$", feature),
            searchConfig = this.searchConfig,
            url.indexOf("$GENOME$") > -1) {
                var genomeId = this.genome.id ? this.genome.id : "hg19";
                url.replace("$GENOME$", genomeId)
            }
            igv.loadData(url, function(data) {
                var results = "plain" === searchConfig.type ? parseSearchResults(data) : JSON.parse(data);
                searchConfig.resultsField && (results = results[searchConfig.resultsField]),
                0 == results.length ? alert('No feature found with name "' + feature + '"') : 1 == results.length ? (r = results[0],
                chr = r[searchConfig.chromosomeField],
                start = r[searchConfig.startField] - searchConfig.coords,
                end = r[searchConfig.endField],
                type = r.featureType,
                handleSearchResult(feature, chr, start, end, type)) : presentSearchResults(results, searchConfig, feature),
                continuation && continuation()
            })
        }
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    var nColumns = 5;
    return igv.ColorPicker = function(parentObject, userPalette) {
        function rowOfUserColors() {
            function parseColor(value) {
                var rgb, hex;
                return rgb = self.rgb_re.exec(value),
                null  !== rgb ? "rgb(" + rgb[0] + ")" : (hex = self.hex_re.exec(value),
                null  !== hex ? igv.hex2Color(hex[0]) : void 0)
            }
            function addUserColor(color) {
                void 0 === self.userColorsIndex ? (self.userColorsIndex = 0,
                self.userColorsRowIndex = 0) : 8 === self.userColorsRowIndex && (self.userColorsRowIndex = 0,
                self.userColorsIndex = (1 + self.userColorsIndex) % self.userColors.length),
                presentUserColor(color, self.userColorsIndex, self.userColorsRowIndex),
                ++self.userColorsRowIndex
            }
            function presentUserColor(color, c, r) {
                var rowContainer, filler;
                rowContainer = self.userColors[c],
                rowContainer.removeClass("igv-grid-rect-hidden"),
                rowContainer.addClass("igv-grid-rect"),
                filler = rowContainer.find(".igv-grid-colorpicker").find(".igv-col").find("div").eq(r),
                filler.removeClass("igv-col-filler-no-color"),
                filler.addClass("igv-col-filler"),
                filler.css("background-color", color),
                filler.click(function() {
                    igv.setTrackColor(self.trackView.track, $(this).css("background-color")),
                    self.trackView.update()
                })
            }
            var rowContainer, row, column, userColorInput, digit;
            for (self.userColors = [],
            digit = 0; 5 > digit; digit++)
                self.userColors.push(rowHidden(digit)),
                self.container.append(self.userColors[digit][0]);
            return self.userColorsIndex = void 0,
            self.userColorsRowIndex = 0,
            row = $('<div class="igv-grid-colorpicker">'),
            column = $('<div class="igv-col igv-col-7-8">'),
            userColorInput = $('<input class="igv-user-input-colorpicker" type="text" placeholder="Ex: #ff0000 or 255,0,0">'),
            userColorInput.change(function() {
                var parsed = parseColor($(this).val());
                void 0 !== parsed ? (igv.setTrackColor(self.trackView.track, parsed),
                self.trackView.update(),
                addUserColor(parsed),
                $(this).val(""),
                $(this).attr("placeholder", "Ex: #ff0000 or 255,0,0"),
                self.userColorFeeback.css("background-color", "white")) : self.userError.show()
            }),
            userColorInput.mousedown(function() {
                $(this).attr("placeholder", "")
            }),
            userColorInput.keyup(function() {
                var parsed;
                "" === $(this).val() && (self.userError.hide(),
                $(this).attr("placeholder", "Ex: #ff0000 or 255,0,0")),
                parsed = parseColor($(this).val()),
                void 0 !== parsed ? (self.userError.hide(),
                self.userColorFeeback.css("background-color", parsed)) : self.userColorFeeback.css("background-color", "white")
            }),
            column.append(userColorInput[0]),
            row.append(column[0]),
            column = makeColumn(0, 0, null ),
            self.userColorFeeback = column.find("div").first(),
            row.append(column),
            rowContainer = $('<div class="igv-grid-rect">'),
            rowContainer.append(row[0]),
            self.userError = $("<span>"),
            self.userError.text("ERROR.    Ex: #ff0000 or 255,0,0"),
            self.userError.hide(),
            row = $('<div class="igv-grid-colorpicker-user-error">'),
            row.append(self.userError[0]),
            rowContainer.append(row),
            rowContainer
        }
        function rowOfDefaultColor() {
            var rowContainer, row, column;
            return row = $('<div class="igv-grid-colorpicker">'),
            self.defaultTrackColorTile = $('<div class="igv-col-filler">'),
            self.defaultTrackColorTile.css("background-color", "#eee"),
            column = $('<div class="igv-col igv-col-1-8">'),
            column.append(self.defaultTrackColorTile[0]),
            column.click(function() {
                igv.setTrackColor(self.trackView.track, $(this).find(".igv-col-filler").css("background-color")),
                self.trackView.update()
            }),
            row.append(column[0]),
            column = $('<div class="igv-col igv-col-7-8 igv-col-label">'),
            column.text("Default Color"),
            row.append(column[0]),
            rowContainer = $('<div class="igv-grid-rect">'),
            rowContainer.append(row[0]),
            rowContainer
        }
        function rowOfPreviousColor() {
            var rowContainer, row, column;
            return row = $('<div class="igv-grid-colorpicker">'),
            self.previousTrackColorTile = $('<div class="igv-col-filler">'),
            self.previousTrackColorTile.css("background-color", "#eee"),
            column = $('<div class="igv-col igv-col-1-8">'),
            column.append(self.previousTrackColorTile[0]),
            column.click(function() {
                igv.setTrackColor(self.trackView.track, $(this).find(".igv-col-filler").css("background-color")),
                self.trackView.update()
            }),
            row.append(column[0]),
            column = $('<div class="igv-col igv-col-7-8 igv-col-label">'),
            column.text("Previous Color"),
            row.append(column[0]),
            rowContainer = $('<div class="igv-grid-rect">'),
            rowContainer.append(row[0]),
            rowContainer
        }
        function rowHidden(rowIndex) {
            var columnIndex, rowContainer = $('<div class="igv-grid-rect-hidden">'), row = $('<div class="igv-grid-colorpicker">');
            for (columnIndex = 0; nColumns > columnIndex; columnIndex++)
                row.append(makeColumn(rowIndex, columnIndex, null )[0]);
            return rowContainer.append(row),
            rowContainer
        }
        function makeRow(colors) {
            var i, rowContainer = $('<div class="igv-grid-rect">'), row = $('<div class="igv-grid-colorpicker">');
            for (i = 0; i < Math.min(nColumns, colors.length); i++)
                row.append(makeColumn(colors[i])[0]);
            return rowContainer.append(row),
            rowContainer
        }
        function makeColumn(colorOrNull) {
            var column = $('<div class="igv-col igv-col-1-8">')
              , filler = $("<div>");
            return column.append(filler[0]),
            null  !== colorOrNull ? (filler.addClass("igv-col-filler"),
            filler.css("background-color", colorOrNull),
            filler.click(function() {
                igv.setTrackColor(self.trackView.track, $(this).css("background-color")),
                self.trackView.update()
            })) : (filler.addClass("igv-col-filler-no-color"),
            filler.css("background-color", "white")),
            column
        }
        var rowIdx, self = this, palette = userPalette || ["#666666", "#0000cc", "#009900", "#cc0000", "#ffcc00", "#9900cc", "#00ccff", "#ff6600", "#ff6600"], nRows = Math.ceil(palette.length / nColumns);
        for (this.rgb_re = /^\s*(0|[1-9]\d?|1\d\d?|2[0-4]\d|25[0-5])\s*,\s*(0|[1-9]\d?|1\d\d?|2[0-4]\d|25[0-5])\s*,\s*(0|[1-9]\d?|1\d\d?|2[0-4]\d|25[0-5])\s*$/,
        this.hex_re = new RegExp("^#([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$"),
        this.container = $('<div class="igv-grid-container-colorpicker">'),
        parentObject.append(this.container[0]),
        this.container.draggable(),
        this.header = $('<div class="igv-grid-header">'),
        this.headerBlurb = $('<div class="igv-grid-header-blurb">'),
        this.header.append(this.headerBlurb[0]),
        igv.dialogCloseWithParentObject(this.header, function() {
            self.hide()
        }),
        this.container.append(this.header[0]),
        rowIdx = 0; nRows > rowIdx; rowIdx++)
            self.container.append(makeRow(palette.slice(rowIdx * nColumns))[0]);
        self.container.append($('<hr class="igv-grid-dividing-line">')[0]),
        self.container.append(rowOfUserColors()[0]),
        self.container.append(rowOfPreviousColor()[0]),
        self.container.append(rowOfDefaultColor()[0])
    }
    ,
    igv.ColorPicker.prototype.hide = function() {
        $(this.container).offset({
            left: 0,
            top: 0
        }),
        this.container.hide()
    }
    ,
    igv.ColorPicker.prototype.show = function() {
        var obj, body_scrolltop = $("body").scrollTop(), track_origin = $(this.trackView.trackDiv).offset(), track_size = {
            width: $(this.trackView.trackDiv).outerWidth(),
            height: $(this.trackView.trackDiv).outerHeight()
        };
        ({
            width: $(this.container).outerWidth(),
            height: $(this.container).outerHeight()
        });
        $(this.container).offset({
            left: track_size.width - 300,
            top: track_origin.top + body_scrolltop
        }),
        this.previousTrackColorTile.css("background-color", this.trackView.track.color),
        this.defaultTrackColorTile.css("background-color", this.trackView.track.defaultColor || igv.constants.defaultColor),
        obj = $(".igv-user-input-color"),
        obj.val(""),
        obj.attr("placeholder", "Ex: #ff0000 or 255,0,0"),
        this.container.show(),
        this.userError.hide(),
        $(this.container).offset(igv.constrainBBox($(this.container), $(igv.browser.trackContainerDiv)))
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    function gatherAllFeatureCaches(cursorTrackList, continuation) {
        var trackCount = cursorTrackList.length
          , trackFeatureMap = [];
        cursorTrackList.forEach(function(cursorTrack) {
            cursorTrack.featureSource.getFeatureCache(function(featureCache) {
                trackFeatureMap.push(featureCache),
                console.log(trackFeatureMap.length),
                trackFeatureMap.length === trackCount && continuation(trackFeatureMap)
            })
        })
    }
    return igv.CursorIdeoPanel = function() {
        this.div = document.createElement("div"),
        this.div.style.height = "40px";
        var contentHeight = this.div.clientHeight
          , contentWidth = this.div.clientWidth
          , canvas = document.createElement("canvas");
        canvas.style.position = "absolute",
        canvas.style.width = "100%",
        canvas.style.height = contentHeight + "px",
        canvas.setAttribute("width", contentWidth),
        canvas.setAttribute("height", contentHeight),
        this.canvas = canvas,
        this.div.appendChild(canvas),
        this.ctx = canvas.getContext("2d")
    }
    ,
    igv.CursorIdeoPanel.prototype.resize = function() {
        var contentHeight = this.div.clientHeight
          , contentWidth = this.div.clientWidth
          , canvas = this.canvas;
        canvas.style.width = "100%",
        canvas.style.height = contentHeight,
        canvas.setAttribute("width", contentWidth),
        canvas.setAttribute("height", contentHeight),
        this.ideograms = {},
        this.repaint()
    }
    ,
    igv.CursorIdeoPanel.prototype.repaint = function() {
        return
    }
    ,
    igv.testGatherAllFeatureCacches = function(trackList, continuation) {
        gatherAllFeatureCaches(trackList, continuation)
    }
    ,
    igv
}(igv || {})
  , cursor = function(cursor) {
    return cursor.CursorHistogram = function(cursorHistogramContainer, track) {
        this.track = track,
        this.canvasFillStyle = igv.greyScale(255),
        this.minMaxfillStyle = igv.rgbaColor(64, 64, 64, .5),
        this.minMaxEdgefillStyle = igv.rgbaColor(32, 32, 32, 1),
        cursorHistogramContainer ? this.createMarkupAndSetBinLength(cursorHistogramContainer) : (this.bins = [],
        this.bins.length = 100),
        this.maxCount = 0,
        this.initializeBins()
    }
    ,
    cursor.CursorHistogram.prototype.initializeBins = function() {
        var i, len;
        for (i = 0,
        len = this.bins.length; len > i; i++)
            this.bins[i] = 0;
        this.maxCount = 0
    }
    ,
    cursor.CursorHistogram.prototype.insertScore = function(score) {
        if (!(0 > score)) {
            var index = this.scoreIndex(score);
            this.bins[index] += 1,
            this.maxCount = Math.max(this.maxCount, this.bins[index])
        }
    }
    ,
    cursor.CursorHistogram.prototype.scoreIndex = function(score) {
        var value, maxScore = this.track.max;
        return score >= maxScore ? this.bins.length - 1 : (value = score / maxScore,
        value *= this.bins.length,
        Math.floor(value))
    }
    ,
    cursor.CursorHistogram.prototype.render = function(track) {
        var myself = this
          , renderMinimumOverlay = function(minimum) {
            var height = minimum / track.max * myself.bins.length;
            igv.graphics.fillRect(myself.ctx, 0, myself.bins.length - height, myself.canvasWidth, height, {
                fillStyle: myself.minMaxfillStyle
            })
        }
          , renderMaximumOverlay = function(maximum) {
            var height = myself.bins.length - maximum / track.max * myself.bins.length;
            igv.graphics.fillRect(myself.ctx, 0, 0, myself.canvasWidth, height, {
                fillStyle: myself.minMaxfillStyle
            })
        }
        ;
        this.fillCanvasWithFillStyle(this.canvasFillStyle),
        this.bins.forEach(function(count, index, counts) {
            var x, y, width, height, percent, color;
            count && (percent = count / this.maxCount,
            x = (1 - percent) / 2 * this.canvasWidth,
            width = percent * this.canvasWidth,
            y = counts.length - 1 - index,
            height = 1,
            color = track.color ? track.color : igv.rgbColor(128, 128, 128),
            igv.graphics.fillRect(myself.ctx, x, y, width, height, {
                fillStyle: color
            }))
        }, this);
        var renderTrackFilterOverlays = track.trackFilter.makeTrackFilterOverlayRenderer(renderMinimumOverlay, renderMaximumOverlay);
        renderTrackFilterOverlays()
    }
    ,
    cursor.CursorHistogram.prototype.fillCanvasWithFillStyle = function(fillStyle) {
        igv.graphics.fillRect(this.ctx, this.canvasWidth, this.canvasHeight, {
            fillStyle: fillStyle
        })
    }
    ,
    cursor.CursorHistogram.prototype.createMarkupAndSetBinLength = function(parentDiv) {
        this.canvas = this.createCanvasAndSetBinLength(parentDiv),
        this.ctx = this.canvas.getContext("2d"),
        this.fillCanvasWithFillStyle(this.canvasFillStyle)
    }
    ,
    cursor.CursorHistogram.prototype.createCanvasAndSetBinLength = function(parentDiv) {
        var cursorHistogramDiv = document.createElement("div");
        return parentDiv.appendChild(cursorHistogramDiv),
        cursorHistogramDiv.className = "igv-cursor-histogram-div",
        this.cursorHistogramDiv = cursorHistogramDiv,
        this.bins = [],
        this.bins.length = cursorHistogramDiv.clientHeight,
        this.createDOMCanvasWithParent(this.cursorHistogramDiv)
    }
    ,
    cursor.CursorHistogram.prototype.createDOMCanvasWithParent = function(parentDiv) {
        var DOMCanvas;
        return DOMCanvas = document.createElement("canvas"),
        parentDiv.appendChild(DOMCanvas),
        this.canvasWidth = parentDiv.clientWidth,
        this.canvasHeight = parentDiv.clientHeight,
        DOMCanvas.setAttribute("width", parentDiv.clientWidth),
        DOMCanvas.setAttribute("height", parentDiv.clientHeight),
        DOMCanvas
    }
    ,
    cursor.CursorHistogram.prototype.updateHeightAndInitializeHistogramWithTrack = function(track) {
        this.canvasHeight = this.cursorHistogramDiv.clientHeight,
        this.canvas.setAttribute("height", this.cursorHistogramDiv.clientHeight),
        this.bins = [],
        this.bins.length = this.cursorHistogramDiv.clientHeight,
        track.cursorModel.initializeHistogram(track)
    }
    ,
    cursor
}(cursor || {})
  , cursor = function(cursor) {
    function resevoirSampledRegionList(regions, max) {
        var i, j, elem, subsampledRegions = [], len = regions.length, cnt = 0;
        for (i = 0; len > i; i++)
            elem = regions[i],
            subsampledRegions.length < max ? subsampledRegions.push(elem) : (j = Math.floor(Math.random() * cnt),
            max > j && (subsampledRegions[j] = elem)),
            cnt++;
        return subsampledRegions
    }
    const resevoirSampledRegionListLength = 1e4;
    return cursor.CursorModel = function(browser) {
        this.browser = browser,
        this.regionWidth = 100,
        $("input[id='regionSizeInput']").val(this.regionWidth),
        this.framePixelWidth = 24,
        $("input[id='frameWidthInput']").val(this.framePixelWidth),
        this.frameMargin = 6,
        this.tracks = [],
        this.regions = [],
        this.filteredRegions = this.regions
    }
    ,
    cursor.CursorModel.prototype.updateRegionDisplay = function() {
        var igvCursorUIHeaderBlurb = $(".igv-cursor-ui-header-blurb")
          , trackLabelSpan = igvCursorUIHeaderBlurb.find("span")[1]
          , regionCountSpan = igvCursorUIHeaderBlurb.find("span")[0]
          , filteredRegionCountSpan = igvCursorUIHeaderBlurb.find("span")[2];
        igvCursorUIHeaderBlurb.css({
            display: "block"
        }),
        $(trackLabelSpan).text(this.browser.designatedTrack ? this.browser.designatedTrack.name : "unnamed"),
        $(trackLabelSpan).css({
            color: this.browser.highlightColor
        }),
        $(regionCountSpan).text(igv.numberFormatter(this.regions.length)),
        $(regionCountSpan).css({
            color: this.browser.highlightColor
        }),
        $(filteredRegionCountSpan).text(igv.numberFormatter(this.filteredRegions.length)),
        $(filteredRegionCountSpan).css({
            color: "rgba(3, 116, 178, 1.0)"
        })
    }
    ,
    cursor.CursorModel.prototype.regionsToRender = function() {
        return void 0 === this.subSampledFilteredRegions ? this.filteredRegions : this.subSampledFilteredRegions
    }
    ,
    cursor.CursorModel.prototype.setRegions = function(features) {
        var featuresLength, i;
        for (this.regions = [],
        i = 0,
        featuresLength = features.length; featuresLength > i; i++)
            this.regions.push(new cursor.CursorRegion(features[i]));
        this.filteredRegions = this.regions,
        this.updateRegionDisplay(),
        this.filterRegions()
    }
    ,
    cursor.CursorModel.prototype.initializeHistogram = function(track, continutation) {
        var myself = this;
        track.cursorHistogram.initializeBins(),
        (void 0 === this.regions || 0 === this.regions.length) && continutation && continutation(),
        track.getFeatureCache(function(featureCache) {
            myself.regions.forEach(function(region) {
                var score = region.getScore(featureCache, myself.regionWidth);
                track.cursorHistogram.insertScore(score)
            }),
            track.cursorHistogram.render(track),
            continutation && continutation()
        })
    }
    ,
    cursor.CursorModel.prototype.filterRegions = function() {
        function runFilters() {
            if (0 === filterPackages.length ? myself.filteredRegions = myself.regions : (myself.filteredRegions = [],
            myself.regions.forEach(function(region) {
                var success, passFilter = !0;
                trackPackages.forEach(function(trackPackage) {
                    !0 === passFilter && (success = trackPackage.trackFilter.evaluate(trackPackage.featureCache, region, myself.regionWidth),
                    !1 === success && (passFilter = !1))
                }),
                passFilter && myself.filteredRegions.push(region)
            })),
            0 === myself.filteredRegions.length)
                return myself.browser.update(),
                void myself.browser.fitToScreen();
            var thresholdFramePixelWidth = myself.browser.trackViewportWidth() / myself.filteredRegions.length;
            void 0 !== thresholdFramePixelWidth && trackViewThatIsSorted ? (myself.browser.presentSortStatus(trackViewThatIsSorted),
            myself.sortRegions(trackViewThatIsSorted.track.featureSource, myself.browser.sortDirection, function() {
                myself.framePixelWidth < thresholdFramePixelWidth ? myself.browser.setFrameWidth(thresholdFramePixelWidth) : myself.browser.update()
            })) : (myself.filteredRegions.length >= Number.MAX_VALUE ? myself.subSampledFilteredRegions = resevoirSampledRegionList(myself.filteredRegions, resevoirSampledRegionListLength) : myself.subSampledFilteredRegions = myself.filteredRegions,
            myself.framePixelWidth < thresholdFramePixelWidth ? myself.browser.setFrameWidth(thresholdFramePixelWidth) : myself.browser.update()),
            myself.updateRegionDisplay(),
            myself.browser.fitToScreen(),
            trackPackages.forEach(function(trackPackage) {
                trackPackage.cursorHistogram.initializeBins(),
                myself.regions.forEach(function(region) {
                    var score, doIncludeRegionForHistogramRender = !0;
                    filterPackages.forEach(function(filterPackage) {
                        var success;
                        trackPackage.trackFilter === filterPackage.trackFilter || !0 === doIncludeRegionForHistogramRender && (success = filterPackage.trackFilter.evaluate(filterPackage.featureCache, region, myself.regionWidth),
                        !1 === success && (doIncludeRegionForHistogramRender = !1))
                    }),
                    doIncludeRegionForHistogramRender && (score = region.getScore(trackPackage.featureCache, myself.regionWidth),
                    trackPackage.cursorHistogram.insertScore(score))
                }),
                trackPackage.cursorHistogram.render(trackPackage.track)
            })
        }
        var trackViewThatIsSorted, trackPackages = [], filterPackages = [], howmany = 0, myself = this;
        $(this.browser.trackContainerDiv).find("i.fa-signal").each(function() {
            var me = $(this);
            me.hasClass("igv-control-sort-fa-selected") && me.removeClass("igv-control-sort-fa-selected")
        }),
        this.browser.trackViews.forEach(function(trackView, tpIndex, trackViews) {
            trackView.track.getFeatureCache(function(featureCache) {
                trackPackages.push({
                    track: trackView.track,
                    trackFilter: trackView.track.trackFilter,
                    featureCache: featureCache,
                    cursorHistogram: trackView.track.cursorHistogram
                }),
                trackView.track.isSortTrack() && (trackViewThatIsSorted = trackView),
                trackView.track.trackFilter.isFilterActive && filterPackages.push({
                    trackFilter: trackView.track.trackFilter,
                    featureCache: featureCache
                }),
                ++howmany === trackViews.length && runFilters()
            })
        })
    }
    ,
    cursor.CursorModel.prototype.sortRegions = function(featureSource, sortDirection, continuation) {
        "use strict";
        var myself = this
          , regionWidth = this.regionWidth;
        this.filteredRegions && 0 !== this.filteredRegions.length || continuation(),
        myself.filteredRegions.length >= Number.MAX_VALUE ? myself.subSampledFilteredRegions = resevoirSampledRegionList(myself.filteredRegions, resevoirSampledRegionListLength) : myself.subSampledFilteredRegions = myself.filteredRegions,
        featureSource.getFeatureCache(function(featureCache) {
            myself.subSampledFilteredRegions.forEach(function(region) {
                region.sortScore = region.getScore(featureCache, regionWidth)
            });
            var compFunction = function(cursorRegion1, cursorRegion2) {
                var s1 = cursorRegion1.sortScore
                  , s2 = cursorRegion2.sortScore;
                return sortDirection * (s1 === s2 ? 0 : s1 > s2 ? -1 : 1)
            }
            ;
            myself.subSampledFilteredRegions.shuffle(),
            myself.subSampledFilteredRegions.length > 1e3 ? myself.subSampledFilteredRegions.heapSort(compFunction) : myself.subSampledFilteredRegions.sort(compFunction),
            continuation()
        })
    }
    ,
    cursor.CursorRegion = function(feature) {
        this.chr = feature.chr,
        this.location = (feature.start + feature.end) / 2
    }
    ,
    cursor.CursorRegion.prototype.getScore = function(featureCache, regionWidth) {
        var score, featureCacheQueryResults, features, regionStart = this.location - regionWidth / 2, regionEnd = this.location + regionWidth / 2, signalColumn = featureCache.signalColumn;
        return featureCacheQueryResults = featureCache.queryFeatures(this.chr, regionStart, regionEnd),
        featureCacheQueryResults && 0 !== featureCacheQueryResults.length ? (features = [],
        featureCacheQueryResults.forEach(function(f) {
            f.end >= regionStart && f.start < regionEnd && features.push(f)
        }),
        0 === features ? -1 : (score = 0,
        featureCacheQueryResults.forEach(function(feature) {
            score = void 0 === feature[signalColumn] ? 1e3 : Math.max(feature[signalColumn], score)
        }),
        -1 === score && console.log("Features " + featureList.length + ". Should not return score = -1 for filter consideration."),
        score)) : -1
    }
    ,
    cursor.CursorRegion.prototype.isRegionEmpty = function(featureCache, regionWidth) {
        var featureList, halfWidth = regionWidth / 2;
        return featureList = featureCache.queryFeatures(this.chr, this.location - halfWidth, this.location + halfWidth),
        featureList ? !0 : !1
    }
    ,
    cursor.CursorRegion.prototype.exportRegion = function(regionWidth) {
        var halfWidth = regionWidth / 2
          , ss = Math.floor(this.location - halfWidth)
          , ee = Math.floor(1 + this.location + halfWidth);
        return this.chr + "	" + ss + "	" + ee + "\n"
    }
    ,
    cursor
}(cursor || {})
  , cursor = function(cursor) {
    function findSignalColumn(allFeatures) {
        return allFeatures.forEach(function(feature) {
            return feature.signal ? "signal" : void 0
        }),
        "score"
    }
    function percentile(featureList, per, signalColumn) {
        var idx = Math.floor(featureList.length * per / 100);
        return featureList.sort(function(a, b) {
            return a[signalColumn] > b[signalColumn] ? 1 : a[signalColumn] < b[signalColumn] ? -1 : 0
        }),
        featureList[idx][signalColumn]
    }
    var MAX_FEATURE_COUNT = 1e8;
    return cursor.CursorTrack = function(config, browser) {
        igv.configTrack(this, config),
        this.color = config.color || cursor.defaultColor(),
        this.config.indexed = !1,
        this.featureSource = new igv.FeatureSource(config),
        this.featureSource.maxFeatureCount = MAX_FEATURE_COUNT,
        this.cursorModel = browser.cursorModel,
        this.referenceFrame = browser.referenceFrame,
        this.cursorHistogram = void 0
    }
    ,
    cursor.CursorTrack.prototype.jsonRepresentation = function() {
        var json;
        return json = {
            name: this.name,
            color: this.color,
            order: this.order,
            height: this.height,
            path: this.featureSource.config.url,
            trackFilter: this.trackFilter.jsonRepresentation()
        }
    }
    ,
    cursor.CursorTrack.prototype.popupMenuItems = function(popover) {
        return [igv.colorPickerMenuItem(popover, this.trackView, "Set color", this.color)]
    }
    ,
    cursor.CursorTrack.prototype.popupData = function(genomicLocation, xOffset, yOffset) {
        return null 
    }
    ,
    cursor.defaultColor = function() {
        return "rgb(  3, 116, 178)"
    }
    ,
    cursor.CursorTrack.prototype.isSortTrack = function() {
        var success = this === this.cursorModel.browser.sortTrack;
        return success
    }
    ,
    cursor.CursorTrack.prototype.getFeatureCache = function(continuation) {
        function setHeader(header) {
            header ? (myself.header = header,
            header.name && !myself.config.name && (myself.name = header.name,
            myself.trackLabelDiv && (myself.trackLabelDiv.innerHTML = header.name,
            myself.trackLabelDiv.title = header.name)),
            header.color && !myself.config.color && (myself.color = "rgb(" + header.color + ")",
            myself.cursorHistogram && myself.cursorHistogram.render(this)),
            header.height && !myself.config.trackHeight && (myself.height = header.height)) : this.header = null 
        }
        var myself = this;
        if (this.featureSource.featureCache) {
            var featureCache = this.featureSource.featureCache;
            if (void 0 === this.max) {
                var allFeatures;
                allFeatures = featureCache.allFeatures(),
                featureCache.signalColumn = findSignalColumn(allFeatures),
                myself.max = percentile(allFeatures, 98, featureCache.signalColumn)
            }
            continuation(this.featureSource.featureCache)
        } else
            void 0 === myself.header && myself.featureSource.getHeader && myself.featureSource.getHeader(function(header) {
                setHeader.call(myself, header),
                myself.getFeatureCache(continuation)
            })
    }
    ,
    cursor.CursorTrack.prototype.draw = function(ctx, refFrame, start, end, width, height, continuation) {
        function drawFeatures(featureCache) {
            var regionNumber, region, regions, len, cursorModel, framePixelWidth, regionWidth, scale, frameMargin, sampleInterval, chr, pxStart, pxEnd, maxFeatureHeight, regionFeatures, i, flen, feature, score, pStart, pEnd, pw, fh, regionBpStart, regionBpEnd, top, signalColumn = featureCache.signalColumn;
            for (regions = this.cursorModel.regionsToRender(),
            regions || continuation(),
            cursorModel = this.cursorModel,
            framePixelWidth = cursorModel.framePixelWidth,
            regionWidth = cursorModel.regionWidth,
            frameMargin = cursorModel.frameMargin,
            frameMargin = Math.floor(Math.min(framePixelWidth / 4), frameMargin),
            sampleInterval = Math.max(1, Math.floor(1 / framePixelWidth)),
            frameMargin > 0 && igv.graphics.fillRect(ctx, 0, 0, width, height, {
                fillStyle: "rgb(255, 255, 255)"
            }),
            igv.graphics.setProperties(ctx, {
                fillStyle: this.color,
                strokeStyle: this.color
            }),
            regionNumber = Math.floor(start),
            len = regions.length; len > regionNumber && end > regionNumber; regionNumber += sampleInterval) {
                if (region = regions[regionNumber],
                chr = region.chr,
                regionBpStart = region.location - regionWidth / 2,
                regionBpEnd = region.location + regionWidth / 2,
                pxStart = Math.floor((regionNumber - start) * framePixelWidth + frameMargin / 2),
                pxEnd = framePixelWidth > 1 ? Math.floor((regionNumber + 1 - start) * framePixelWidth - frameMargin / 2) : pxStart + 1,
                maxFeatureHeight = height,
                framePixelWidth > 2)
                    for (regionFeatures = featureCache.queryFeatures(region.chr, regionBpStart, regionBpEnd),
                    i = 0,
                    flen = regionFeatures.length; flen > i; i++)
                        feature = regionFeatures[i],
                        feature.end >= regionBpStart && feature.start < regionBpEnd && (score = feature[signalColumn],
                        scale = regionWidth / (framePixelWidth - frameMargin),
                        pStart = Math.min(pxEnd, Math.max(pxStart, pxStart + (feature.start - regionBpStart) / scale)),
                        pEnd = Math.min(pxEnd, pxStart + (feature.end - regionBpStart) / scale),
                        pw = Math.max(1, pEnd - pStart));
                else
                    pw = pxEnd - pxStart,
                    score = region.getScore(featureCache, regionWidth);
                void 0 !== score && this.max > 0 ? (fh = Math.round(score / this.max * maxFeatureHeight),
                top = height - fh) : (top = 0,
                fh = height),
                igv.graphics.fillRect(ctx, pxStart, top, pw, fh)
            }
            continuation()
        }
        var myself = this;
        this.getFeatureCache(function(featureCache) {
            drawFeatures.call(myself, featureCache)
        })
    }
    ,
    cursor.CursorTrack.prototype.drawLabel = function(ctx) {}
    ,
    cursor
}(cursor || {})
  , cursor = function(cursor) {
    var minimumHorizontalScrollBarDraggableWidth = 6;
    return cursor.HorizontalScrollbar = function(browser, horizontalScrollBarContainer) {
        this.browser = browser,
        this.markupWithParentDivObject(horizontalScrollBarContainer)
    }
    ,
    cursor.HorizontalScrollbar.prototype.update = function() {
        var regionBoundsWidth, trackLeft, scrollBarDraggableLeft, scrollBarDraggableWidth, scrollBarWidth = $(".igv-horizontal-scrollbar-div").first().width(), scrollBarDraggable = $(".igv-horizontal-scrollbar-draggable-div").first(), framePixelWidth = this.browser.cursorModel.framePixelWidth, regionListLength = this.browser.cursorModel.filteredRegions.length, referenceFrame = this.browser.referenceFrame;
        regionBoundsWidth = framePixelWidth * regionListLength,
        scrollBarDraggableWidth = Math.max(minimumHorizontalScrollBarDraggableWidth, scrollBarWidth / regionBoundsWidth * scrollBarWidth),
        trackLeft = referenceFrame.toPixels(referenceFrame.start),
        scrollBarDraggableLeft = scrollBarWidth / regionBoundsWidth * trackLeft,
        scrollBarDraggableLeft + scrollBarDraggableWidth > scrollBarWidth && (scrollBarDraggableLeft -= scrollBarDraggableLeft + scrollBarDraggableWidth - scrollBarWidth,
        scrollBarDraggableWidth = scrollBarWidth - scrollBarDraggableLeft,
        referenceFrame.start = referenceFrame.toBP(regionBoundsWidth / scrollBarWidth * scrollBarDraggableLeft),
        this.browser.ideoPanel && this.browser.ideoPanel.repaint(),
        this.browser.karyoPanel && this.browser.karyoPanel.repaint(),
        this.browser.trackViews.forEach(function(trackPanel) {
            trackPanel.update()
        })),
        $(scrollBarDraggable).css({
            left: Math.floor(scrollBarDraggableLeft) + "px",
            width: Math.floor(scrollBarDraggableWidth) + "px"
        })
    }
    ,
    cursor.HorizontalScrollbar.prototype.markupWithParentDivObject = function(horizontalScrollBarContainer) {
        var horizontalScrollBar, horizontalScrollBarShim, horizontalScrollBarDraggable, anyViewport, myself = this, isMouseDown = void 0, lastMouseX = void 0;
        horizontalScrollBarShim = $('<div class="igv-horizontal-scrollbar-shim-div">')[0],
        horizontalScrollBarContainer.append(horizontalScrollBarShim),
        anyViewport = $("div.igv-viewport-div").first(),
        $(horizontalScrollBarShim).css("left", anyViewport.css("left")),
        $(horizontalScrollBarShim).css("right", anyViewport.css("right")),
        horizontalScrollBar = $('<div class="igv-horizontal-scrollbar-div">')[0],
        $(horizontalScrollBarShim).append(horizontalScrollBar),
        horizontalScrollBarDraggable = $('<div class="igv-horizontal-scrollbar-draggable-div">')[0],
        $(horizontalScrollBar).append(horizontalScrollBarDraggable),
        $(document).mousedown(function(e) {
            lastMouseX = e.screenX,
            myself.isMouseIn = !0
        }),
        $(horizontalScrollBarDraggable).mousedown(function(e) {
            isMouseDown = !0
        }),
        $(document).mousemove(function(e) {
            var maxRegionPixels, left;
            isMouseDown && myself.isMouseIn && void 0 !== lastMouseX && (left = $(horizontalScrollBarDraggable).position().left,
            left += e.screenX - lastMouseX,
            left = Math.max(0, left),
            left = Math.min($(horizontalScrollBar).width() - $(horizontalScrollBarDraggable).outerWidth(), left),
            $(horizontalScrollBarDraggable).css({
                left: left + "px"
            }),
            maxRegionPixels = myself.browser.cursorModel.framePixelWidth * myself.browser.cursorModel.filteredRegions.length,
            myself.browser.referenceFrame.start = myself.browser.referenceFrame.toBP(left) * (maxRegionPixels / $(horizontalScrollBar).width()),
            myself.browser.ideoPanel && myself.browser.ideoPanel.repaint(),
            myself.browser.karyoPanel && myself.browser.karyoPanel.repaint(),
            myself.browser.trackViews.forEach(function(trackPanel) {
                trackPanel.update()
            }),
            lastMouseX = e.screenX)
        }),
        $(document).mouseup(function(e) {
            isMouseDown = !1,
            lastMouseX = void 0,
            myself.isMouseIn = void 0
        })
    }
    ,
    cursor
}(cursor || {})
  , igv = function(igv) {
    function addCursorBrowserExtensions(browser) {
        function frameWidthNumberFormatter(frameWidth) {
            var divisor;
            return divisor = 1 > frameWidth ? 1e3 : 100 > frameWidth ? 100 : 10,
            Math.round(frameWidth * divisor) / divisor
        }
        function cursorTrackWithConfig(config, browser) {
            function cursorGetType(path) {
                return path.endsWith(".bed") || path.endsWith(".bed.gz") || path.endsWith(".broadPeak") || path.endsWith(".broadPeak.gz") ? "bed" : void 0
            }
            var path, type, track;
            return browser.isDuplicateTrack(config) ? void 0 : (path = config.url,
            type = config.type,
            type || (type = cursorGetType(path)),
            "bed" !== type ? void window.alert("Bad Track type") : (track = new cursor.CursorTrack(config,browser),
            config.designatedTrack && !0 === config.designatedTrack && (browser.designatedTrack = track),
            track))
        }
        browser.loadTracksWithConfigList = function(configList) {
            var doInitialize, tracks = [];
            configList.forEach(function(config) {
                var track = cursorTrackWithConfig(config, browser);
                void 0 !== track && (tracks.push(track),
                !0 === config.designatedTrack && (browser.designatedTrack = track))
            }),
            0 !== tracks.length && (void 0 === browser.designatedTrack && (browser.designatedTrack = tracks[0]),
            browser.getFeaturesForTracks(tracks, function() {
                doInitialize = 0 === igv.browser.trackViews.length,
                tracks.forEach(function(track) {
                    browser.addTrack(track)
                }),
                doInitialize && browser.designatedTrack.featureSource.allFeatures(function(features) {
                    var horizontalScrollBarContainer = $("div.igv-horizontal-scrollbar-container-div");
                    browser.horizontalScrollbar = new cursor.HorizontalScrollbar(browser,$(horizontalScrollBarContainer)),
                    browser.cursorModel.setRegions(features),
                    browser.horizontalScrollbar.update()
                })
            }))
        }
        ,
        browser.initializeWithSession = function(session) {
            var tracks;
            browser.sessionTeardown(),
            browser.cursorModel.regionWidth = session.regionWidth,
            $("input[id='regionSizeInput']").val(browser.cursorModel.regionWidth),
            tracks = [],
            session.tracks.forEach(function(trackSession) {
                var track, config = {
                    type: "bed",
                    url: trackSession.path,
                    color: trackSession.color,
                    name: trackSession.name || trackSession.label,
                    order: trackSession.order,
                    height: trackSession.height,
                    trackFilter: trackSession.trackFilter,
                    designatedTrack: trackSession.designatedTrack
                };
                track = cursorTrackWithConfig(config, browser),
                void 0 !== track && tracks.push(track),
                config.designatedTrack && !0 === config.designatedTrack && (browser.designatedTrack = track)
            }),
            0 !== tracks.length && (void 0 === browser.designatedTrack && (browser.designatedTrack = tracks[0]),
            browser.getFeaturesForTracks(tracks, function() {
                tracks.forEach(function(track) {
                    browser.addTrack(track)
                }),
                browser.designatedTrack.featureSource.allFeatures(function(features) {
                    var horizontalScrollBarContainer = $("div.igv-horizontal-scrollbar-container-div");
                    browser.horizontalScrollbar = new cursor.HorizontalScrollbar(browser,$(horizontalScrollBarContainer)),
                    browser.cursorModel.setRegions(features),
                    browser.setFrameWidth(browser.trackViewportWidth() * session.framePixelWidthUnitless),
                    browser.referenceFrame.bpPerPixel = 1 / browser.cursorModel.framePixelWidth,
                    browser.fitToScreen(),
                    browser.horizontalScrollbar.update()
                })
            }))
        }
        ,
        browser.session = function() {
            var dev_null, session = {
                start: Math.floor(browser.referenceFrame.start),
                end: Math.floor(browser.referenceFrame.bpPerPixel * browser.trackViewportWidth() + browser.referenceFrame.start),
                regionWidth: browser.cursorModel.regionWidth,
                framePixelWidthUnitless: browser.cursorModel.framePixelWidth / browser.trackViewportWidth(),
                tracks: []
            };
            return dev_null = browser.trackViewportWidth(),
            browser.trackViews.forEach(function(trackView) {
                var jsonRepresentation = trackView.track.jsonRepresentation();
                jsonRepresentation && (browser.designatedTrack && browser.designatedTrack === trackView.track && (jsonRepresentation.designatedTrack = !0),
                session.tracks.push(jsonRepresentation))
            }),
            JSON.stringify(session, void 0, 4)
        }
        ,
        browser.sessionTeardown = function() {
            for (var trackView, horizontalScrollBarContainer; this.trackViews.length > 0; )
                trackView = this.trackViews[this.trackViews.length - 1],
                this.removeTrack(trackView.track);
            horizontalScrollBarContainer = $("div.igv-horizontal-scrollbar-container-div"),
            $(horizontalScrollBarContainer).empty(),
            this.horizontalScrollbar = void 0
        }
        ,
        browser.getFeaturesForTracks = function(tracks, continuation) {
            var trackCount = tracks.length;
            igv.startSpinnerAtParentElement(browser.div),
            tracks.forEach(function(track) {
                track.getFeatureCache(function(ignored) {
                    --trackCount,
                    0 === trackCount && (igv.stopSpinnerAtParentElement(browser.div),
                    continuation())
                })
            })
        }
        ,
        browser.presentSortStatus = function(trackView) {
            $(trackView.track.sortButton).addClass("igv-control-sort-fa-selected"),
            $(browser.trackContainerDiv).find("i.fa-signal").each(function() {
                var me = $(this);
                1 === browser.sortDirection ? me.addClass("fa-flip-horizontal") : me.removeClass("fa-flip-horizontal")
            })
        }
        ,
        browser.selectDesignatedTrack = function(trackView) {
            var currentDesignatedTrackView, bullseyeInner, bullseyeOuter, trackLabelDiv;
            browser.designatedTrack && browser.designatedTrack.trackFilter.trackPanel !== trackView && (currentDesignatedTrackView = browser.designatedTrack.trackFilter.trackPanel,
            bullseyeInner = $(currentDesignatedTrackView.trackDiv).find("i.fa-circle"),
            bullseyeInner.removeClass("igv-control-bullseye-fa-selected"),
            bullseyeInner.addClass("igv-control-bullseye-fa"),
            bullseyeOuter = $(currentDesignatedTrackView.trackDiv).find("i.fa-circle-thin"),
            bullseyeOuter.removeClass("igv-control-bullseye-fa-selected"),
            trackLabelDiv = $(currentDesignatedTrackView.trackDiv).find("div.igv-track-label-div"),
            trackLabelDiv.removeClass("igv-track-label-selected-div")),
            browser.designatedTrack = trackView.track,
            bullseyeInner = $(trackView.trackDiv).find("i.fa-circle"),
            bullseyeInner.removeClass("igv-control-bullseye-fa"),
            bullseyeInner.addClass("igv-control-bullseye-fa-selected"),
            bullseyeOuter = $(trackView.trackDiv).find("i.fa-circle-thin"),
            bullseyeOuter.addClass("igv-control-bullseye-fa-selected"),
            trackLabelDiv = $(trackView.trackDiv).find("div.igv-track-label-div"),
            trackLabelDiv.addClass("igv-track-label-selected-div")
        }
        ,
        browser.setFrameWidth = function(frameWidthString) {
            if (!igv.isNumber(frameWidthString))
                return void console.log("bogus " + frameWidthString);
            var frameWidth = parseFloat(frameWidthString);
            frameWidth > 0 && (browser.cursorModel.framePixelWidth = frameWidth,
            browser.referenceFrame.bpPerPixel = 1 / frameWidth,
            $("input[id='frameWidthInput']").val(frameWidthNumberFormatter(frameWidth)),
            browser.update())
        }
        ,
        browser.setRegionSize = function(regionSizeString) {
            var regionSize = parseFloat(regionSizeString);
            regionSize > 0 && (browser.cursorModel.regionWidth = regionSize,
            $("input[id='regionSizeInput']").val(browser.cursorModel.regionWidth),
            browser.cursorModel.filterRegions())
        }
        ,
        browser.zoomIn = function() {
            browser.setFrameWidth(2 * browser.cursorModel.framePixelWidth),
            browser.update()
        }
        ,
        browser.zoomOut = function() {
            var thresholdFramePixelWidth = browser.trackViewportWidth() / browser.cursorModel.regionsToRender().length;
            browser.setFrameWidth(Math.max(thresholdFramePixelWidth, .5 * browser.cursorModel.framePixelWidth)),
            browser.update()
        }
        ,
        browser.fitToScreen = function() {
            var frameWidth;
            browser.cursorModel && browser.cursorModel.regions && browser.cursorModel.regionsToRender().length > 0 && (frameWidth = browser.trackViewportWidth() / browser.cursorModel.regionsToRender().length,
            browser.referenceFrame.start = 0,
            browser.setFrameWidth(frameWidth))
        }
        ,
        browser.trackContentWidth = function() {
            var width;
            return width = this.trackViews && this.trackViews.length > 0 ? this.trackViews[0].contentDiv.clientWidth : this.trackContainerDiv.clientWidth
        }
        ,
        browser.resize = function() {
            var ratio;
            browser.horizontalScrollbar ? (ratio = browser.cursorModel.framePixelWidth / browser.trackContentWidth(),
            this.__proto__.resize.call(this),
            browser.setFrameWidth(ratio * browser.trackContentWidth()),
            browser.horizontalScrollbar.update()) : this.__proto__.resize.call(this)
        }
        ,
        browser.removeTrack = function(track) {
            this.__proto__.removeTrack.call(this, track),
            track === this.designatedTrack && (this.designatedTrack = void 0),
            this.cursorModel.filterRegions()
        }
    }
    function addCursorTrackViewExtensions(browser) {
        igv.TrackView.prototype.viewportCreationHelper = function(viewportDiv) {}
        ,
        igv.TrackView.prototype.leftHandGutterCreationHelper = function(leftHandGutter) {
            var trackFilterButtonDiv, trackLabelDiv, sortButton, bullseyeStackSpan, bullseyeOuterIcon, bullseyeInnerIcon, trackView = this, track = trackView.track;
            trackLabelDiv = $('<div class="igv-track-label-div">')[0],
            trackLabelDiv.innerHTML = track.name,
            trackLabelDiv.title = track.name,
            $(trackView.leftHandGutter).append(trackLabelDiv),
            track.trackLabelDiv = trackLabelDiv,
            bullseyeStackSpan = document.createElement("span"),
            $(trackView.leftHandGutter).append($(bullseyeStackSpan)),
            bullseyeStackSpan.className = "fa-stack igv-control-bullseye-stack-fa",
            track.bullseyeStackSpan = bullseyeStackSpan,
            bullseyeOuterIcon = document.createElement("i"),
            bullseyeStackSpan.appendChild(bullseyeOuterIcon),
            bullseyeOuterIcon.className = "fa fa-stack-2x fa-circle-thin",
            bullseyeInnerIcon = document.createElement("i"),
            bullseyeStackSpan.appendChild(bullseyeInnerIcon),
            bullseyeInnerIcon.className = "fa fa-stack-1x fa-circle igv-control-bullseye-fa",
            bullseyeStackSpan.onclick = function() {
                browser.designatedTrack && browser.designatedTrack === trackView.track || (browser.selectDesignatedTrack(trackView),
                browser.cursorModel && browser.designatedTrack.featureSource.allFeatures(function(featureList) {
                    browser.referenceFrame.start = 0,
                    browser.cursorModel.setRegions(featureList)
                }))
            }
            ,
            trackFilterButtonDiv = document.createElement("div"),
            $(trackView.leftHandGutter).append($(trackFilterButtonDiv)),
            trackFilterButtonDiv.className = "igv-track-filter-button-div",
            trackView.track.trackFilter = new igv.TrackFilter(trackView),
            trackView.track.trackFilter.createTrackFilterWidgetWithParentElement(trackFilterButtonDiv),
            browser.sortDirection = void 0,
            browser.sortTrack = void 0,
            sortButton = document.createElement("i"),
            $(trackView.leftHandGutter).append($(sortButton)),
            sortButton.className = "fa fa-signal igv-control-sort-fa fa-flip-horizontal",
            track.sortButton = sortButton,
            sortButton.onclick = function() {
                browser.sortTrack === track ? browser.sortDirection = void 0 === browser.sortDirection ? 1 : -1 * browser.sortDirection : (browser.sortTrack = track,
                void 0 === browser.sortDirection && (browser.sortDirection = 1)),
                browser.cursorModel.sortRegions(track.featureSource, browser.sortDirection, function(regions) {
                    browser.update(),
                    browser.trackViews.forEach(function(tp) {
                        1 === browser.sortDirection ? $(tp.track.sortButton).addClass("fa-flip-horizontal") : $(tp.track.sortButton).removeClass("fa-flip-horizontal"),
                        track === tp.track ? $(tp.track.sortButton).addClass("igv-control-sort-fa-selected") : $(tp.track.sortButton).removeClass("igv-control-sort-fa-selected")
                    })
                })
            }
        }
        ,
        igv.TrackView.prototype.rightHandGutterCreationHelper = function(trackManipulationIconBox) {
            var gearButton, myself = this;
            $(trackManipulationIconBox).append($('<i class="fa fa-chevron-circle-up   igv-track-menu-move-up">')[0]),
            $(trackManipulationIconBox).append($('<i class="fa fa-chevron-circle-down igv-track-menu-move-down">')[0]),
            $(trackManipulationIconBox).find("i.fa-chevron-circle-up").click(function() {
                myself.browser.reduceTrackOrder(myself)
            }),
            $(trackManipulationIconBox).find("i.fa-chevron-circle-down").click(function() {
                myself.browser.increaseTrackOrder(myself)
            }),
            gearButton = $('<i class="fa fa-gear fa-20px igv-track-menu-gear igv-app-icon" style="padding-top: 5px">'),
            $(trackManipulationIconBox).append(gearButton[0]),
            $(gearButton).click(function(e) {
                igv.popover.presentTrackMenu(e.pageX, e.pageY, myself)
            })
        }
        ,
        igv.TrackView.prototype.repaint = function() {
            function Tile(chr, tileStart, tileEnd, scale, image) {
                this.chr = chr,
                this.startBP = tileStart,
                this.endBP = tileEnd,
                this.scale = scale,
                this.image = image
            }
            if (this.track && this.browser && this.browser.referenceFrame) {
                var tileWidth, tileStart, tileEnd, buffer, ctx, myself = this, referenceFrame = this.browser.referenceFrame, refFrameStart = referenceFrame.start, refFrameEnd = refFrameStart + referenceFrame.toBP(this.canvas.width);
                if (!this.tile || !this.tile.containsRange(referenceFrame.chr, refFrameStart, refFrameEnd, referenceFrame.bpPerPixel))
                    if (myself.currentTask && !myself.currentTask.complete && myself.currentTask.end >= refFrameEnd && myself.currentTask.start <= refFrameStart)
                        ;
                    else if (myself.currentTask && (myself.currentTask.complete || myself.currentTask.abort(),
                    myself.currentTask = null ),
                    myself.currentTask = {
                        canceled: !1,
                        chr: referenceFrame.chr,
                        start: tileStart,
                        end: tileEnd,
                        abort: function() {
                            this.canceled = !0,
                            this.xhrRequest && this.xhrRequest.abort()
                        }
                    },
                    buffer = document.createElement("canvas"),
                    buffer.width = 3 * this.canvas.width,
                    buffer.height = this.canvas.height,
                    ctx = buffer.getContext("2d"),
                    tileWidth = Math.round(referenceFrame.toBP(buffer.width)),
                    tileStart = Math.max(0, Math.round(referenceFrame.start - tileWidth / 3)),
                    tileEnd = tileStart + tileWidth,
                    myself.track.draw(ctx, referenceFrame, tileStart, tileEnd, buffer.width, buffer.height, function(task) {
                        myself.currentTask && myself.currentTask.canceled || (myself.tile = new Tile(referenceFrame.chr,tileStart,tileEnd,referenceFrame.bpPerPixel,buffer),
                        myself.paintImage()),
                        myself.currentTask = void 0
                    }, myself.currentTask),
                    myself.track.paintAxis) {
                        var buffer2 = document.createElement("canvas");
                        buffer2.width = this.controlCanvas.width,
                        buffer2.height = this.controlCanvas.height;
                        var ctx2 = buffer2.getContext("2d");
                        myself.track.paintAxis(ctx2, buffer2.width, buffer2.height),
                        myself.controlCtx.drawImage(buffer2, 0, 0)
                    }
                this.tile && this.tile.chr === referenceFrame.chr ? this.paintImage() : this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height),
                Tile.prototype.containsRange = function(chr, start, end, scale) {
                    var hit = this.scale == scale && start >= this.startBP && end <= this.endBP && chr === this.chr;
                    return hit
                }
            }
        }
    }
    return igv.createCursorBrowser = function(options) {
        function configureTrackWithLocalFileOrPath(config) {
            config.designatedTrack = 0 === igv.browser.trackViews.length ? !0 : void 0,
            igv.browser.loadTracksWithConfigList([config])
        }
        var horizontalScrollBarContainer, contentHeader, trackContainerDiv, browser, utilityDiv, dataSource;
        document.getElementById("zoomOut").onclick = function(e) {
            browser.zoomOut()
        }
        ,
        document.getElementById("zoomIn").onclick = function() {
            browser.zoomIn()
        }
        ,
        document.getElementById("fitToScreen").onclick = function() {
            browser.fitToScreen()
        }
        ,
        document.getElementById("regionSizeInput").onchange = function(e) {
            var value = $("#regionSizeInput").val();
            return igv.isNumber(value) ? void browser.setRegionSize(parseFloat(value, 10)) : void console.log("bogus " + value)
        }
        ,
        document.getElementById("frameWidthInput").onchange = function(e) {
            var value = $("input[id='frameWidthInput']").val();
            return igv.isNumber(value) ? void browser.setFrameWidth(parseFloat(value, 10)) : void console.log("bogus " + value)
        }
        ,
        document.getElementById("trackHeightInput").onchange = function(e) {
            var value = $("#trackHeightInput").val();
            return igv.isNumber(value) ? void browser.setTrackHeight(Math.round(parseFloat(value, 10))) : void console.log("bogus " + value)
        }
        ,
        $("#igvExportRegionsModalForm").submit(function(event) {
            var exportedRegions = ""
              , downloadInput = $("#igvExportRegionsModalForm").find('input[name="downloadContent"]');
            browser.cursorModel.filteredRegions.forEach(function(region) {
                exportedRegions += region.exportRegion(browser.cursorModel.regionWidth)
            }),
            downloadInput.val(exportedRegions),
            $("#igvExportRegionsModal").modal("hide")
        }),
        $("#igvSaveSessionModalForm").submit(function(event) {
            var session, downloadInput;
            session = browser.session(),
            downloadInput = $("#igvSaveSessionModalForm").find('input[name="downloadContent"]'),
            downloadInput.val(session),
            $("#igvSaveSessionModal").modal("hide")
        });
        var sessionInput = document.getElementById("igvSessionLoad");
        sessionInput.addEventListener("change", function(e) {
            var sessionFile, fileReader = new FileReader;
            sessionFile = sessionInput.files[0],
            fileReader.onload = function(e) {
                var json = e.target.result
                  , session = JSON.parse(json);
                $("#igvSessionLoad").val(""),
                $("#igvSessionLoadModal").modal("hide"),
                browser.initializeWithSession(session)
            }
            ,
            fileReader.readAsText(sessionFile)
        }),
        document.getElementById("igvFileUpload").onchange = function(e) {
            var localFile = $(this)[0].files[0];
            configureTrackWithLocalFileOrPath({
                type: "bed",
                localFile: localFile
            }),
            $(this).val(""),
            $("#igvFileUploadModal").modal("hide")
        }
        ,
        document.getElementById("igvLoadURL").onchange = function(e) {
            var path = $(this).val();
            configureTrackWithLocalFileOrPath({
                type: "bed",
                url: path,
                name: igv.browser.trackLabelWithPath(path)
            }),
            $(this).val(""),
            $("#igvLoadURLModal").modal("hide")
        }
        ,
        trackContainerDiv = $('<div id="igvTrackContainerDiv" class="igv-track-container-div">')[0],
        browser = new igv.Browser(options,trackContainerDiv),
        browser.encodeTable = new igv.EncodeTable($("#encodeModalBody"),function() {
            igv.encodeSearch(function(json) {
                dataSource = new igv.EncodeDataSource({
                    jSON: json
                }),
                dataSource.loadJSON(function() {
                    browser.encodeTable.spinner.hide(),
                    browser.encodeTable.loadWithDataSource(dataSource)
                })
            })
        }
        ),
        browser.div.appendChild(igv.spinner()),
        igv.stopSpinnerAtParentElement(browser.div),
        document.getElementById("igvContainerDiv").appendChild(browser.div),
        contentHeader = $('<div class="row"></div>')[0],
        $(browser.div).append(contentHeader),
        horizontalScrollBarContainer = $('<div class="igv-horizontal-scrollbar-container-div">')[0],
        $(browser.div).append(horizontalScrollBarContainer),
        utilityDiv = $('<div class="igv-utility-div">'),
        $(browser.div).append(utilityDiv[0]),
        utilityDiv.append($('<div class="igv-control-panel-header-div">Track Summary</div>')[0]),
        $(browser.div).append(trackContainerDiv),
        igv.popover = new igv.Popover(browser.div),
        igv.colorPicker = new igv.ColorPicker($(browser.div),options.palette),
        igv.colorPicker.hide(),
        igv.dialog = new igv.Dialog($(browser.div)),
        igv.dialog.hide(),
        $.extend($.ui.dialog.prototype.options, {
            create: function() {
                var $this = $(this);
                $this.parent().find(".ui-dialog-buttonpane button:first").focus(),
                $this.keypress(function(e) {
                    return e.keyCode == $.ui.keyCode.ENTER ? ($this.parent().find(".ui-dialog-buttonpane button:first").click(),
                    !1) : void 0
                })
            }
        }),
        igv.addAjaxExtensions(),
        addCursorBrowserExtensions(browser),
        addCursorTrackViewExtensions(browser),
        browser.cursorModel = new cursor.CursorModel(browser),
        browser.referenceFrame = new igv.ReferenceFrame("",0,1 / browser.cursorModel.framePixelWidth),
        browser.highlightColor = "rgb(204, 51, 0)";
        var sessionJSONPath = igv.getQueryValue("session");
        if (sessionJSONPath)
            $.getJSON(sessionJSONPath, function(session) {
                console.log("launchSession: " + JSON.stringify(session)),
                browser.initializeWithSession(session)
            });
        else {
            if (void 0 === options.tracks || 0 === options.tracks.length)
                return;
            browser.loadTracksWithConfigList(options.tracks)
        }
        return browser
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    return igv.DataRangeDialog = function(parentObject) {
        function doOKCancel() {
            var rowContainer, row, column, columnFiller;
            return rowContainer = $('<div class="igv-grid-rect">'),
            row = $('<div class="igv-grid-dialog">'),
            column = $('<div class="igv-col igv-col-1-3">'),
            row.append(column[0]),
            column = $('<div class="igv-col igv-col-1-3">'),
            columnFiller = $('<div class="igv-col-filler-cancel-button">'),
            columnFiller.text("Cancel"),
            columnFiller.click(function() {
                self.hide()
            }),
            column.append(columnFiller[0]),
            row.append(column[0]),
            column = $('<div class="igv-col igv-col-1-3">'),
            self.ok = $('<div class="igv-col-filler-cancel-button">'),
            self.ok.text("OK"),
            column.append(self.ok[0]),
            row.append(column[0]),
            rowContainer.append(row[0]),
            rowContainer
        }
        function doLayout() {
            var rowContainer, row, column, columnFiller;
            return rowContainer = $('<div class="igv-grid-rect">'),
            row = $('<div class="igv-grid-dialog">'),
            column = $('<div class="spacer10">'),
            row.append(column[0]),
            column = $('<div class="igv-col igv-col-3-8">'),
            self.minLabel = $('<div class="igv-data-range-input-label">'),
            self.minLabel.text("Minimum"),
            column.append(self.minLabel[0]),
            row.append(column[0]),
            column = $('<div class="igv-col igv-col-3-8">'),
            self.minInput = $('<input class="igv-data-range-input" type="text" value="125">'),
            column.append(self.minInput[0]),
            row.append(column[0]),
            rowContainer.append(row[0]),
            row = $('<div class="igv-grid-dialog">'),
            column = $('<div class="igv-col igv-col-3-8">'),
            self.maxLabel = $('<div class="igv-data-range-input-label">'),
            self.maxLabel.text("Maximum"),
            column.append(self.maxLabel[0]),
            row.append(column[0]),
            column = $('<div class="igv-col igv-col-3-8">'),
            self.maxInput = $('<input class="igv-data-range-input" type="text" value="250">'),
            column.append(self.maxInput[0]),
            row.append(column[0]),
            rowContainer.append(row[0]),
            row = $('<div class="igv-grid-dialog">'),
            column = $('<div class="igv-col igv-col-3-8">'),
            columnFiller = $('<div class="igv-data-range-input-label">'),
            columnFiller.text("Log scale"),
            column.append(columnFiller[0]),
            row.append(column[0]),
            column = $('<div class="igv-col igv-col-3-8">'),
            self.logInput = $('<input class="igv-data-range-input" type="checkbox">'),
            self.logInput[0].disabled = !0,
            column.append(self.logInput[0]),
            row.append(column[0]),
            rowContainer.append(row[0]),
            rowContainer
        }
        var self = this;
        this.container = $('<div class="igv-grid-container-dialog">'),
        parentObject.append(this.container[0]),
        this.container.draggable(),
        this.header = $('<div class="igv-grid-header">'),
        this.headerBlurb = $('<div class="igv-grid-header-blurb">'),
        this.header.append(this.headerBlurb[0]),
        igv.dialogCloseWithParentObject(this.header, function() {
            self.hide()
        }),
        this.container.append(this.header[0]),
        self.container.append(doLayout()[0]),
        self.container.append(doOKCancel()[0])
    }
    ,
    igv.DataRangeDialog.prototype.hide = function() {
        $(this.container).offset({
            left: 0,
            top: 0
        }),
        this.container.hide()
    }
    ,
    igv.DataRangeDialog.prototype.show = function() {
        var body_scrolltop = $("body").scrollTop()
          , track_origin = ($(this.trackView.trackDiv).scrollTop(),
        $(this.trackView.trackDiv).offset())
          , track_size = {
            width: $(this.trackView.trackDiv).outerWidth(),
            height: $(this.trackView.trackDiv).outerHeight()
        };
        ({
            width: $(this.container).outerWidth(),
            height: $(this.container).outerHeight()
        });
        this.container.show(),
        $(this.container).offset({
            left: track_size.width - 300,
            top: track_origin.top + body_scrolltop
        }),
        $(this.container).offset(igv.constrainBBox($(this.container), $(igv.browser.trackContainerDiv)))
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    return igv.DataLoader = function(url) {
        this.url = url
    }
    ,
    igv.DataLoader.prototype.loadBinaryString = function(continuation, task) {
        if (this.url.endsWith(".gz"))
            this.loadArrayBuffer(function(data) {
                for (var inflate = new Zlib.Gunzip(new Uint8Array(data)), plain = inflate.decompress(), result = "", i = 0, len = plain.length; len > i; i++)
                    result += String.fromCharCode(plain[i]);
                continuation(result)
            }, task);
        else {
            var loader = this
              , oReq = new XMLHttpRequest;
            if (task && (task.xhrRequest = oReq),
            oReq.open("GET", this.url),
            this.range) {
                var rangeEnd = this.range.start + this.range.size - 1;
                oReq.setRequestHeader("Range", "bytes=" + this.range.start + "-" + rangeEnd),
                oReq.setRequestHeader("Cache-control", "no-cache"),
                oReq.setRequestHeader("If-None-Match", Math.random().toString(36))
            }
            oReq.overrideMimeType("text/plain; charset=x-user-defined"),
            oReq.onload = function(event) {
                loader.status = oReq.status;
                var data = oReq.responseText;
                continuation(data)
            }
            ,
            oReq.onerror = function(event) {
                console.log("Error: " + event),
                continuation(null )
            }
            ,
            oReq.ontimeout = function(event) {}
            ,
            oReq.send()
        }
    }
    ,
    igv.DataLoader.prototype.loadArrayBuffer = function(continuation, task) {
        var oReq = new XMLHttpRequest;
        if (task && (task.xhrRequest = oReq),
        oReq.open("GET", this.url),
        this.range) {
            var rangeEnd = this.range.start + this.range.size - 1;
            oReq.setRequestHeader("Range", "bytes=" + this.range.start + "-" + rangeEnd),
            oReq.setRequestHeader("Cache-control", "no-cache"),
            oReq.setRequestHeader("If-None-Match", Math.random().toString(36))
        }
        oReq.responseType = "arraybuffer";
        var loader = this;
        oReq.onload = function(event) {
            loader.status = oReq.status;
            var arrayBuffer = oReq.response;
            continuation(arrayBuffer)
        }
        ,
        oReq.onerror = function(event) {
            loader.onerror ? loader.onerror(event) : continuation(null )
        }
        ,
        oReq.ontimeout = function(event) {}
        ,
        oReq.onabort = function(event) {
            console.log("Aborted"),
            continuation(null )
        }
        ,
        oReq.send()
    }
    ,
    igv.DataLoader.prototype.loadHeader = function(continuation) {
        function parseResponseHeaders(headerStr) {
            var headers = {};
            if (!headerStr)
                return headers;
            for (var headerPairs = headerStr.split("\r\n"), i = 0, len = headerPairs.length; len > i; i++) {
                var headerPair = headerPairs[i]
                  , index = headerPair.indexOf(": ");
                if (index > 0) {
                    var key = headerPair.substring(0, index)
                      , val = headerPair.substring(index + 2);
                    headers[key] = val
                }
            }
            return headers
        }
        var loader = this
          , oReq = new XMLHttpRequest;
        oReq.open("HEAD", this.url),
        oReq.onload = function(event) {
            loader.status = oReq.status;
            var headerStr = oReq.getAllResponseHeaders()
              , headerDictionary = parseResponseHeaders(headerStr);
            continuation(headerDictionary)
        }
        ,
        oReq.onerror = function(event) {
            console.log("XMLHttpRequest - Error loading" + loader.url),
            loader.onerror ? loader.onerror(event) : continuation(null )
        }
        ,
        oReq.ontimeout = function(event) {}
        ,
        oReq.send()
    }
    ,
    igv.DataLoader.prototype.getContentLength = function(continuation) {
        var loader = this;
        loader.onerror = function() {
            continuation(-1)
        }
        ,
        loader.loadHeader(function(header) {
            var contentLengthString = header ? header["Content-Length"] : null ;
            continuation(contentLengthString ? parseInt(contentLengthString) : -1)
        })
    }
    ,
    igv.loadData = function(url, callback, range) {
        var loader = new igv.DataLoader(url);
        range && (loader.range = range),
        loader.loadBinaryString(callback)
    }
    ,
    createCORSRequest = function(url) {
        var xhr = new XMLHttpRequest;
        return "withCredentials" in xhr ? xhr.open("GET", url, !0) : "undefined" != typeof XDomainRequest ? (xhr = new XDomainRequest,
        xhr.open(method, url)) : xhr = null ,
        xhr
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    return igv.Dialog = function(parentObject) {
        function rowOfCancel() {
            var rowContainer, row, column, columnFiller;
            return row = $('<div class="igv-grid-dialog">'),
            column = $('<div class="igv-col igv-col-5-8">'),
            row.append(column[0]),
            column = $('<div class="igv-col igv-col-3-8">'),
            columnFiller = $('<div class="igv-col-filler-cancel-button">'),
            columnFiller.text("Cancel"),
            columnFiller.click(function() {
                self.hide()
            }),
            column.append(columnFiller[0]),
            row.append(column[0]),
            rowContainer = $('<div class="igv-grid-rect">'),
            rowContainer.append(row[0]),
            rowContainer
        }
        function rowOfLabel() {
            var rowContainer, row, column;
            return row = $('<div class="igv-grid-dialog">'),
            column = $('<div class="igv-col igv-col-4-4">'),
            self.dialogLabel = $('<div class="igv-user-input-label">'),
            column.append(self.dialogLabel[0]),
            row.append(column[0]),
            rowContainer = $('<div class="igv-grid-rect">'),
            rowContainer.append(row[0]),
            rowContainer
        }
        function rowOfInput() {
            var rowContainer, row, column;
            return row = $('<div class="igv-grid-dialog">'),
            column = $('<div class="igv-col igv-col-4-4">'),
            self.dialogInput = $('<input class="igv-user-input-dialog" type="text" value="#000000">'),
            column.append(self.dialogInput[0]),
            row.append(column[0]),
            rowContainer = $('<div class="igv-grid-rect">'),
            rowContainer.append(row[0]),
            rowContainer
        }
        var self = this;
        this.container = $('<div class="igv-grid-container-dialog">'),
        parentObject.append(this.container[0]),
        this.container.draggable(),
        this.header = $('<div class="igv-grid-header">'),
        this.headerBlurb = $('<div class="igv-grid-header-blurb">'),
        this.header.append(this.headerBlurb[0]),
        igv.dialogCloseWithParentObject(this.header, function() {
            self.hide()
        }),
        this.container.append(this.header[0]),
        self.container.append(rowOfLabel()[0]),
        self.container.append(rowOfInput()[0]),
        self.container.append(rowOfCancel()[0])
    }
    ,
    igv.Dialog.prototype.hide = function() {
        $(this.container).offset({
            left: 0,
            top: 0
        }),
        this.container.hide()
    }
    ,
    igv.Dialog.prototype.show = function() {
        var body_scrolltop = $("body").scrollTop()
          , track_origin = ($(this.trackView.trackDiv).scrollTop(),
        $(this.trackView.trackDiv).offset())
          , track_size = {
            width: $(this.trackView.trackDiv).outerWidth(),
            height: $(this.trackView.trackDiv).outerHeight()
        };
        ({
            width: $(this.container).outerWidth(),
            height: $(this.container).outerHeight()
        });
        this.container.show(),
        $(this.container).offset({
            left: track_size.width - 300,
            top: track_origin.top + body_scrolltop
        }),
        $(this.container).offset(igv.constrainBBox($(this.container), $(igv.browser.trackContainerDiv)))
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    function encodeAntibodyColor(antibody) {
        var key;
        return antibody && "" !== antibody ? (key = antibody.toUpperCase(),
        antibodyColors[key] ? antibodyColors[key] : cursor.defaultColor()) : cursor.defaultColor()
    }
    var antibodyColors = {
        H3K27AC: "rgb(200, 0, 0)",
        H3K27ME3: "rgb(130, 0, 4)",
        H3K36ME3: "rgb(0, 0, 150)",
        H3K4ME1: "rgb(0, 150, 0)",
        H3K4ME2: "rgb(0, 150, 0)",
        H3K4ME3: "rgb(0, 150, 0)",
        H3K9AC: "rgb(100, 0, 0)",
        H3K9ME1: "rgb(100, 0, 0)"
    };
    return igv.EncodeTable = function(parentModalBodyObject, continuation) {
        var spinnerFA, self = this;
        this.encodeModalTableObject = $('<table id="encodeModalTable" cellpadding="0" cellspacing="0" border="0" class="display"></table>'),
        parentModalBodyObject.append(this.encodeModalTableObject[0]),
        this.initialized = !1,
        spinnerFA = $('<i class="fa fa-lg fa-spinner fa-spin"></i>'),
        this.spinner = $('<div class="igv-encode-spinner-container"></div>'),
        this.spinner.append(spinnerFA[0]),
        $("#encodeModalTable").append(this.spinner[0]),
        $("#igvEncodeModal").on("shown.bs.modal", function(e) {
            !0 !== self.initialized && (self.initialized = !0,
            continuation())
        }),
        $("#encodeModalTopCloseButton").on("click", function() {
            $("tr.selected").removeClass("selected")
        }),
        $("#encodeModalBottomCloseButton").on("click", function() {
            $("tr.selected").removeClass("selected")
        }),
        $("#encodeModalGoButton").on("click", function() {
            var tableRows, dataSourceJSONRow, configList = [], encodeModalTable = $("#encodeModalTable"), dataTableAPIInstance = encodeModalTable.DataTable();
            tableRows = self.dataTablesObject.$("tr.selected"),
            tableRows && (tableRows.removeClass("selected"),
            tableRows.each(function() {
                var index, data = dataTableAPIInstance.row(this).data();
                index = data[0],
                dataSourceJSONRow = self.dataSource.jSON.rows[index],
                configList.push({
                    type: dataSourceJSONRow.Format,
                    url: dataSourceJSONRow.url,
                    color: encodeAntibodyColor(dataSourceJSONRow.Target),
                    format: dataSourceJSONRow.Format,
                    name: dataSourceJSONRow.Name
                })
            }),
            void 0 === igv.browser.designatedTrack && (configList[0].designatedTrack = !0),
            igv.browser.loadTracksWithConfigList(configList))
        })
    }
    ,
    igv.EncodeTable.prototype.loadWithDataSource = function(dataSource) {
        var self = this
          , dataSet = dataSource.dataTablesData()
          , columns = dataSource.columnHeadings();
        this.dataSource = dataSource,
        this.dataTablesObject = self.encodeModalTableObject.dataTable({
            data: dataSet,
            scrollX: !0,
            scrollY: "400px",
            scrollCollapse: !0,
            paging: !1,
            columnDefs: [{
                targets: 0,
                visible: !1
            }],
            autoWidth: !0,
            columns: columns
        }),
        self.encodeModalTableObject.find("tbody").on("click", "tr", function() {
            $(this).hasClass("selected") ? $(this).removeClass("selected") : $(this).addClass("selected")
        })
    }
    ,
    igv.EncodeTable.prototype.encodeTrackLabel = function(record) {
        return record.antibody ? record.antibody + " " + record.cell + " " + record.replicate : record.cell + record.dataType + " " + record.view + " " + record.replicate
    }
    ,
    igv.EncodeDataSource = function(config) {
        this.config = config
    }
    ,
    igv.EncodeDataSource.prototype.loadJSON = function(continuation) {
        this.jSON = {},
        this.config.filePath ? this.ingestFile(this.config.filePath, continuation) : this.config.jSON && this.ingestJSON(this.config.jSON, continuation)
    }
    ,
    igv.EncodeDataSource.prototype.ingestJSON = function(json, continuation) {
        var self = this;
        self.jSON = json,
        json.rows.forEach(function(row, i) {
            Object.keys(row).forEach(function(key) {
                var item = row[key];
                self.jSON.rows[i][key] = void 0 === item || "" === item ? "-" : item
            })
        }),
        continuation()
    }
    ,
    igv.EncodeDataSource.prototype.ingestFile = function(file, continuation) {
        var self = this
          , dataLoader = new igv.DataLoader(file);
        dataLoader.loadBinaryString(function(data) {
            var item, lines = data.splitLines();
            self.jSON.columns = lines[0].split("	"),
            self.jSON.columns.pop(),
            item = self.jSON.columns.shift(),
            self.jSON.columns.push(item),
            self.jSON.rows = [],
            lines.slice(1, lines.length - 1).forEach(function(line) {
                var tokens, row;
                tokens = line.split("	"),
                tokens.pop(),
                item = tokens.shift(),
                tokens.push(item),
                row = {},
                tokens.forEach(function(t, i, ts) {
                    var key = self.jSON.columns[i];
                    row[key] = void 0 === t || "" === t ? "-" : t
                }),
                self.jSON.rows.push(row)
            }),
            continuation()
        })
    }
    ,
    igv.EncodeDataSource.prototype.dataTablesData = function() {
        var self = this
          , result = [];
        return this.jSON.rows.forEach(function(row, index) {
            var rr = [];
            rr.push(index),
            self.jSON.columns.forEach(function(key) {
                rr.push(row[key])
            }),
            result.push(rr)
        }),
        result
    }
    ,
    igv.EncodeDataSource.prototype.columnHeadings = function() {
        var columnHeadings = (this.jSON.columnWidths,
        []);
        return columnHeadings.push({
            title: "index"
        }),
        this.jSON.columns.forEach(function(heading, i) {
            columnHeadings.push({
                title: heading
            })
        }),
        columnHeadings
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    var query2 = "https://www.encodeproject.org/search/?type=experiment&files.output_type=peaks&files.file_format=bed&format=json&field=lab.title&field=biosample_term_name&field=assay_term_name&field=target.label&field=files.file_format&field=files.output_type&field=files.href&field=files.replicate.technical_replicate_number&field=files.replicate.biological_replicate_number&field=files.assembly&limit=all";
    return igv.encodeSearch = function(continuation) {
        igvxhr.loadJson(query2, {
            success: function(json) {
                var columns = ["Assembly", "Cell Type", "Target", "Assay Type", "Bio Rep", "Tech Rep", "Lab"]
                  , columnWidths = [8, 20, 10, 10, 8, 8, 40]
                  , rows = [];
                json["@graph"].forEach(function(record) {
                    var assayType = record.assay_term_name
                      , experimentId = record["@id"]
                      , cellType = record.biosample_term_name || ""
                      , target = record.target ? record.target.label : ""
                      , lab = record.lab ? record.lab.title : "";
                    record.files.forEach(function(file) {
                        if ("bed" === file.file_format) {
                            var format = file.file_format
                              , type = file.output_type
                              , bioRep = file.replicate ? file.replicate.bioligcal_replicate_number : void 0
                              , techRep = file.replicate ? file.replicate.technical_replicate_number : void 0
                              , name = cellType + " " + target
                              , assembly = file.assembly;
                            bioRep && (name += " " + bioRep),
                            techRep && (name += (bioRep ? ":" : "0:") + techRep),
                            rows.push({
                                Assembly: assembly,
                                ExperimentID: experimentId,
                                "Cell Type": cellType,
                                "Assay Type": assayType,
                                Target: target,
                                Lab: lab,
                                Format: format,
                                Type: type,
                                url: "https://www.encodeproject.org" + file.href,
                                "Bio Rep": bioRep,
                                "Tech Rep": techRep,
                                Name: name
                            })
                        }
                    })
                }),
                rows.sort(function(a, b) {
                    var a1 = a.Assembly
                      , a2 = b.Assembly
                      , ct1 = a["Cell Type"]
                      , ct2 = b["Cell Type"]
                      , t1 = a.Target
                      , t2 = b.Target;
                    return a1 === a2 ? ct1 === ct2 ? t1 === t2 ? 0 : t2 > t1 ? -1 : 1 : ct2 > ct1 ? -1 : 1 : a2 > a1 ? -1 : 1
                }),
                continuation({
                    columns: columns,
                    columnWidths: columnWidths,
                    rows: rows
                })
            }
        })
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    return igv.FastaSequence = function(file, indexFile) {
        indexFile || (indexFile = file + ".fai"),
        this.file = file,
        this.indexFile = indexFile
    }
    ,
    igv.FastaSequence.prototype.getSequence = function(chr, start, end, continuation, task) {
        function getSequenceFromInterval(interval, start, end) {
            var offset = start - interval.start
              , n = end - start
              , seq = interval.features ? interval.features.substr(offset, n) : null ;
            return seq
        }
        var myself = this
          , interval = myself.interval;
        if (interval && interval.contains(chr, start, end))
            continuation(getSequenceFromInterval(interval, start, end));
        else {
            var qstart = start
              , qend = end;
            if (1e5 > end - start) {
                var w = end - start
                  , center = Math.round(start + w / 2);
                qstart = Math.max(0, center - 5e4),
                qend = center + 5e4
            }
            this.readSequence(chr, qstart, qend, function(seqBytes) {
                myself.interval = new igv.GenomicInterval(chr,qstart,qend,seqBytes),
                continuation(getSequenceFromInterval(myself.interval, start, end))
            }, task)
        }
    }
    ,
    igv.FastaSequence.prototype.loadIndex = function(continuation) {
        var sequence = this;
        igv.loadData(this.indexFile, function(data) {
            var lines = data.splitLines()
              , len = lines.length
              , lineNo = 0;
            for (sequence.chromosomeNames = [],
            sequence.index = {}; len > lineNo; ) {
                var tokens = lines[lineNo++].split("	")
                  , nTokens = tokens.length;
                if (5 == nTokens) {
                    var chr = tokens[0]
                      , size = parseInt(tokens[1])
                      , position = parseInt(tokens[2])
                      , basesPerLine = parseInt(tokens[3])
                      , bytesPerLine = parseInt(tokens[4])
                      , indexEntry = {
                        size: size,
                        position: position,
                        basesPerLine: basesPerLine,
                        bytesPerLine: bytesPerLine
                    };
                    sequence.chromosomeNames.push(chr),
                    sequence.index[chr] = indexEntry
                }
            }
            continuation && continuation(sequence.index)
        })
    }
    ,
    igv.FastaSequence.prototype.readSequence = function(chr, qstart, qend, continuation, task) {
        var fasta = this;
        if (this.index) {
            var idxEntry = this.index[chr];
            if (idxEntry) {
                var start = Math.max(0, qstart)
                  , end = Math.min(idxEntry.size, qend)
                  , bytesPerLine = idxEntry.bytesPerLine
                  , basesPerLine = idxEntry.basesPerLine
                  , position = idxEntry.position
                  , nEndBytes = bytesPerLine - basesPerLine
                  , startLine = Math.floor(start / basesPerLine)
                  , endLine = Math.floor(end / basesPerLine)
                  , base0 = startLine * basesPerLine
                  , offset = start - base0
                  , startByte = position + startLine * bytesPerLine + offset
                  , base1 = endLine * basesPerLine
                  , offset1 = end - base1
                  , endByte = position + endLine * bytesPerLine + offset1 - 1
                  , byteCount = endByte - startByte + 1;
                if (0 >= byteCount)
                    return;
                var dataLoader = new igv.DataLoader(fasta.file);
                dataLoader.range = {
                    start: startByte,
                    size: byteCount
                },
                dataLoader.loadBinaryString(function(allBytes) {
                    var nBases, seqBytes = "", srcPos = 0, desPos = 0, allBytesLength = allBytes.length;
                    for (offset > 0 && (nBases = Math.min(end - start, basesPerLine - offset),
                    seqBytes += allBytes.substr(srcPos, nBases),
                    srcPos += nBases + nEndBytes,
                    desPos += nBases); allBytesLength > srcPos; )
                        nBases = Math.min(basesPerLine, allBytesLength - srcPos),
                        seqBytes += allBytes.substr(srcPos, nBases),
                        srcPos += nBases + nEndBytes,
                        desPos += nBases;
                    continuation(seqBytes)
                }, task)
            } else
                console.log("No index entry for chr: " + chr),
                fasta.interval = new igv.GenomicInterval(chr,qstart,qend,null ),
                continuation(null )
        } else
            this.loadIndex(function() {
                fasta.readSequence(chr, qstart, qend, continuation, task)
            })
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    function getParser(format) {
        return new igv.FeatureParser(format)
    }
    return igv.AneuFeatureSource = function(config, thefilename) {
        this.config = config || {};
        var getPath = function(urlorfile) {
            var last = urlorfile.lastIndexOf("/")
              , path = urlorfile.substring(0, last + 1);
            return path
        }
        ;
        if (config.localFile) {
            var path = getPath(config.localFile.name);
            this.localFile = config.localFile,
            this.filename = path + thefilename
        } else {
            var path = getPath(config.url);
            this.url = path + thefilename,
            this.filename = thefilename,
            this.headURL = config.headURL || this.filename
        }
        this.parser = getParser("aneu")
    }
    ,
    igv.AneuFeatureSource.prototype.getFeatures = function(chr, bpStart, bpEnd, success, task) {
        var myself = this
          , range = new igv.GenomicInterval(chr,bpStart,bpEnd)
          , featureCache = this.featureCache;
        if (featureCache && (void 0 === featureCache.range || featureCache.range.containsRange(range))) {
            var features = this.featureCache.queryFeatures(chr, bpStart, bpEnd);
            success(features)
        } else
            this.loadFeatures(function(featureList) {
                myself.featureCache = new igv.FeatureCache(featureList);
                var features = myself.featureCache.queryFeatures(chr, bpStart, bpEnd);
                success(features)
            }, task, range)
    }
    ,
    igv.AneuFeatureSource.prototype.allFeatures = function(success) {
        this.getFeatureCache(function(featureCache) {
            success(featureCache.allFeatures())
        })
    }
    ,
    igv.AneuFeatureSource.prototype.getFeatureCache = function(success) {
        var myself = this;
        this.featureCache ? success(this.featureCache) : this.loadFeatures(function(featureList) {
            myself.featureCache = new igv.FeatureCache(featureList),
            success(myself.featureCache)
        })
    }
    ,
    igv.AneuFeatureSource.prototype.loadFeatures = function(success, task, range) {
        var myself = this
          , parser = myself.parser
          , options = {
            headers: myself.config.headers,
            tokens: myself.config.tokens,
            success: function(data) {
                myself.header = parser.parseHeader(data);
                var features = parser.parseFeatures(data);
                success(features)
            },
            error: function(msg) {
                console.log("Error loading: " + msg)
            },
            task: task
        };
        myself.localFile ? igvxhr.loadStringFromFile(myself.localFile, options) : igvxhr.loadString(myself.url, options)
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    var debug = !1
      , log = function(msg) {
        if (debug) {
            var d = new Date
              , time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
            "undefined" != typeof copy && copy(msg),
            "undefined" != typeof console && console.log("AneuTrack: " + time + " " + msg)
        }
    }
      , sortDirection = 1;
    return igv.AneuTrack = function(config) {
        igv.configTrack(this, config),
        this.maxHeight = config.maxHeight - 2 || 500,
        this.sampleSquishHeight = config.sampleSquishHeight || 20,
        this.sampleExpandHeight = config.sampleExpandHeight || 125,
        this.sampleHeight = this.sampleExpandHeight,
        this.highColor = config.highColor || "rgb(30,30,255)",
        this.lowColor = config.lowColor || "rgb(220,0,0)",
        this.midColor = config.midColor || "rgb(150,150,150)",
        this.posColorScale = config.posColorScale || new igv.GradientColorScale({
            low: .1,
            lowR: 255,
            lowG: 255,
            lowB: 255,
            high: 1.5,
            highR: 255,
            highG: 0,
            highB: 0
        }),
        this.negColorScale = config.negColorScale || new igv.GradientColorScale({
            low: -1.5,
            lowR: 0,
            lowG: 0,
            lowB: 255,
            high: -.1,
            highR: 255,
            highG: 255,
            highB: 255
        }),
        this.sampleCount = 0,
        this.samples = {},
        this.sampleNames = [],
        log("AneuTrack: config: " + JSON.stringify(config)),
        this.config = config
    }
    ,
    igv.AneuTrack.prototype.popupMenuItems = function(popover) {
        return []
    }
    ,
    igv.AneuTrack.prototype.getSummary = function(chr, bpStart, bpEnd, continuation, task) {
        var filtersummary = function(redlinedata) {
            var summarydata = [];
            for (i = 0,
            len = redlinedata.length; i < len; i++) {
                var feature = redlinedata[i];
                Math.abs(feature.score - 2) > .5 && feature.end - feature.start > 5e6 && summarydata.push(feature)
            }
            continuation(summarydata)
        }
        ;
        this.featureSourceRed ? this.featureSourceRed.getFeatures(chr, bpStart, bpEnd, filtersummary, task) : (log("Aneu track has no summary data yet"),
        continuation(null ))
    }
    ,
    igv.AneuTrack.prototype.loadSummary = function(chr, bpStart, bpEnd, continuation, task) {
        var me = this;
        if (!this.featureSourceRed) {
            var afterJsonLoaded = function(json) {
                json && (json = JSON.parse(json),
                me.featureSourceRed = new igv.AneuFeatureSource(config,json.redline),
                me.getSummary(chr, bpStart, bpEnd, continuation, task))
            }
            ;
            afterload = {
                headers: me.config.headers,
                tokens: me.config.tokens,
                success: afterJsonLoaded
            };
            var config = me.config;
            return config.localFile ? igvxhr.loadStringFromFile(config.localFile, afterload) : igvxhr.loadString(config.url, afterload),
            null 
        }
        this.featureSourceRed.getFeatures(chr, bpStart, bpEnd, continuation, task)
    }
    ,
    igv.AneuTrack.prototype.getFeatures = function(chr, bpStart, bpEnd, continuation, task) {
        var me = this;
        if (this.featureSourceRed) {
            var loadsecondfile = function(redlinedata) {
                me.redlinedata = redlinedata,
                me.featureSource.getFeatures(chr, bpStart, bpEnd, continuation, task)
            }
            ;
            this.featureSourceRed.getFeatures(chr, bpStart, bpEnd, loadsecondfile, task)
        } else {
            log("Data is not loaded yet. Loading json first");
            var afterJsonLoaded = function(json) {
                json = JSON.parse(json),
                log("Got json: " + json + ", diff :" + json.diff),
                me.featureSource = new igv.AneuFeatureSource(config,json.diff),
                me.featureSourceRed = new igv.AneuFeatureSource(config,json.redline),
                me.getFeatures(chr, bpStart, bpEnd, continuation, task)
            }
            ;
            afterload = {
                headers: me.config.headers,
                tokens: me.config.tokens,
                success: afterJsonLoaded
            };
            var config = me.config;
            config.localFile ? igvxhr.loadStringFromFile(config.localFile, afterload) : igvxhr.loadString(config.url, afterload)
        }
    }
    ,
    igv.AneuTrack.prototype.getColor = function(value) {
        var expected = 2;
        return expected > value ? color = this.lowColor : value > expected ? color = this.highColor : color = this.midColor,
        color
    }
    ,
    igv.AneuTrack.prototype.paintAxis = function(ctx, pixelWidth, pixelHeight) {
        function computeH(min, max, value, maxpixels) {
            return maxpixels - Math.round((value - min) / max * maxpixels)
        }
        var track = this
          , font = ((track.maxLogP - track.minLogP) / pixelHeight,
        {
            font: "normal 10px Arial",
            textAlign: "right",
            strokeStyle: "black"
        });
        igv.graphics.fillRect(ctx, 0, 0, pixelWidth, pixelHeight, {
            fillStyle: "rgb(255, 255, 255)"
        });
        var max = track.max;
        max || (max = 8);
        var min = 0
          , x = 49;
        igv.graphics.strokeLine(ctx, x, computeH(min, max, 0, track.maxheight), x, computeH(min, max, max, track.maxheight), font),
        x -= 5;
        for (var p = 0; max >= p; p += 1) {
            var h = computeH(min, max, p, track.maxheight);
            igv.graphics.strokeLine(ctx, x, h, x + 5, h, font),
            p > 0 && max > p && igv.graphics.fillText(ctx, p, x - 4, h + 3, font)
        }
        font.textAlign = "center",
        igv.graphics.fillText(ctx, "ploidy", x - 15, pixelHeight / 2, font, {
            rotate: {
                angle: -90
            }
        })
    }
    ,
    igv.AneuTrack.prototype.draw = function(options) {
        function computeH(min, max, value, maxpixels) {
            return maxpixels - Math.round((value - min) / max * maxpixels)
        }
        function checkForLog(featureList) {
            var i;
            if (void 0 === myself.isLog)
                for (myself.isLog = !1,
                i = 0; i < featureList.length; i++)
                    if (featureList[i].value < 0)
                        return void (myself.isLog = !0)
        }
        var ctx, bpPerPixel, bpStart, pixelWidth, pixelHeight, bpEnd, segment, len, sample, i, y, color, value, px, px1, pw, xScale, myself = this;
        ctx = options.context,
        pixelWidth = options.pixelWidth,
        pixelHeight = options.pixelHeight;
        var max = 4
          , min = 0
          , PLOIDYMAX = 10;
        igv.graphics.fillRect(ctx, 0, 0, pixelWidth, pixelHeight, {
            fillStyle: "rgb(255, 255, 255)"
        });
        var track = this;
        window.track = track;
        var computeMinMax = function(featureList) {
            for (i = 0,
            len = featureList.length; len > i; i++) {
                sample = featureList[i].sample;
                var value = featureList[i].value;
                value > max && (max = value),
                min > value && (min = value)
            }
            max > PLOIDYMAX && (max = PLOIDYMAX),
            min = Math.max(min, 0),
            track.max = max
        }
          , drawFeatureList = function(ctx, featureList, debug) {
            for (bpPerPixel = options.bpPerPixel,
            bpStart = options.bpStart,
            bpEnd = bpStart + pixelWidth * bpPerPixel + 1,
            xScale = bpPerPixel,
            i = 0,
            len = featureList.length; len > i; i++)
                sample = featureList[i].sample,
                sample && this.samples && this.samples.hasOwnProperty(sample) && (this.samples[sample] = myself.sampleCount,
                this.sampleNames.push(sample),
                this.sampleCount++);
            checkForLog(featureList);
            var expected = 2;
            myself.isLog && (min = 0,
            expected = 0);
            var maxheight = myself.height - 4;
            myself.maxheight = maxheight;
            var len = featureList.length;
            for (i = 0; len > i; i++)
                if (segment = featureList[i],
                !(segment.end < bpStart)) {
                    if (segment.start > bpEnd)
                        break;
                    if (segment.sample ? (y = myself.samples[segment.sample] * myself.sampleHeight,
                    log("Got sample y=" + y)) : y = 0,
                    value = segment.score,
                    color = myself.midColor,
                    myself.isLog ? (value = Math.log2(value / 2),
                    expected - .1 > value ? color = myself.negColorScale.getColor(value) : value > expected + .1 && (color = myself.posColorScale.getColor(value))) : expected - .2 > value ? color = myself.lowColor : value > expected + .2 && (color = myself.highColor),
                    px = Math.round((segment.start - bpStart) / xScale),
                    px1 = Math.round((segment.end - bpStart) / xScale),
                    pw = Math.max(2, px1 - px),
                    max >= value) {
                        var h = computeH(min, max, value, maxheight);
                        1 == debug && log("       Got value " + value + ", h=" + h + ", y+h=" + (y + h) + ", px=" + px + ", px1=" + px1 + ", pw=" + pw + ", color=" + color + ", maxh=" + maxheight),
                        igv.graphics.fillRect(ctx, px, y + h, pw, 2, {
                            fillStyle: color
                        })
                    }
                }
        }
          , maxheight = myself.height - 4
          , font = {
            font: "normal 10px Arial",
            textAlign: "right",
            strokeStyle: "rgb(150,150,150)",
            fillStyle: "rgb(150,150,150)"
        };
        if (options.features && computeMinMax(options.features),
        this.redlinedata && computeMinMax(this.redlinedata),
        2 > min && max > 2) {
            var mid = computeH(min, max, 2, maxheight);
            console.log("drawing dashed line and solid line at " + mid + " to " + pixelWidth),
            igv.graphics.dashedLine(ctx, 20, mid, pixelWidth, mid, 4, font);
            var zero = computeH(min, max, 0, maxheight);
            igv.graphics.strokeLine(ctx, 20, zero, pixelWidth, zero, font)
        } else
            log("NOT drawing line at 2");
        options.features ? drawFeatureList(ctx, options.features, !1) : console.log("No diff feature list. options=" + JSON.stringify(options)),
        this.redlinedata ? drawFeatureList(ctx, this.redlinedata, !1) : console.log("No redline feature list")
    }
    ,
    igv.AneuTrack.prototype.computePixelHeight = function(features) {
        for (i = 0,
        len = features.length; i < len; i++)
            sample = features[i].sample,
            this.samples && !this.samples.hasOwnProperty(sample) && (this.samples[sample] = this.sampleCount,
            this.sampleNames.push(sample),
            this.sampleCount++);
        this.sampleCount = Math.max(1, this.sampleCount);
        var h = Math.max(30, this.sampleCount * this.sampleHeight);
        return this.height = h,
        h
    }
    ,
    igv.AneuTrack.prototype.sortSamples = function(chr, bpStart, bpEnd, direction, callback) {
        var segment, min, max, f, i, s, sampleNames, myself = this, len = bpEnd - bpStart, scores = {};
        this.featureSource.getFeatures(chr, bpStart, bpEnd, function(featureList) {
            for (i = 0,
            len = featureList.length; len > i; i++)
                if (segment = featureList[i],
                !(segment.end < bpStart)) {
                    if (segment.start > bpEnd)
                        break;
                    min = Math.max(bpStart, segment.start),
                    max = Math.min(bpEnd, segment.end),
                    f = (max - min) / len,
                    s = scores[segment.sample],
                    s || (s = 0),
                    scores[segment.sample] = s + f * segment.value
                }
            for (sampleNames = Object.keys(myself.samples),
            sampleNames.sort(function(a, b) {
                var s1 = scores[a]
                  , s2 = scores[b];
                return s1 || (s1 = Number.MAX_VALUE),
                s2 || (s2 = Number.MAX_VALUE),
                s1 == s2 ? 0 : s1 > s2 ? direction : -1 * direction
            }),
            i = 0; i < sampleNames.length; i++)
                myself.samples[sampleNames[i]] = i;
            myself.sampleNames = sampleNames,
            callback()
        })
    }
    ,
    igv.AneuTrack.prototype.altClick = function(genomicLocation, event) {
        var refFrame = igv.browser.referenceFrame
          , bpWidth = refFrame.toBP(2.5)
          , bpStart = genomicLocation - bpWidth
          , bpEnd = genomicLocation + bpWidth
          , chr = refFrame.chr
          , track = this;
        this.sortSamples(chr, bpStart, bpEnd, sortDirection, function() {
            track.trackView.update()
        }),
        sortDirection *= -1
    }
    ,
    igv.AneuTrack.prototype.popupData = function(genomicLocation, xOffset, yOffset) {
        var sampleName, items, row = Math.floor(yOffset / this.sampleHeight);
        if (log("popupData for row " + row + ", sampleNames=" + JSON.stringify(this.sampleNames)),
        row < this.sampleNames.length) {
            if (sampleName = this.sampleNames[row],
            items = sampleName ? [{
                name: "Sample",
                value: sampleName
            }] : [],
            this.featureSource.featureCache) {
                var chr = igv.browser.referenceFrame.chr
                  , featureList = this.featureSource.featureCache.queryFeatures(chr, genomicLocation, genomicLocation);
                featureList.forEach(function(f) {
                    f.sample === sampleName && (items.push({
                        name: "Value",
                        value: f.value
                    }),
                    items.push({
                        name: "Start",
                        value: f.start
                    }),
                    items.push({
                        name: "End",
                        value: f.end
                    }))
                })
            }
            if (this.featureSourceRed.featureCache) {
                var chr = igv.browser.referenceFrame.chr
                  , featureList = this.featureSourceRed.featureCache.queryFeatures(chr, genomicLocation, genomicLocation);
                featureList.forEach(function(f) {
                    f.sample === sampleName && (items.push({
                        name: "Value",
                        value: f.value
                    }),
                    items.push({
                        name: "Start",
                        value: f.start
                    }),
                    items.push({
                        name: "End",
                        value: f.end
                    }))
                })
            }
            return items
        }
        return null 
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    function buildTreeMap(featureList) {
        var featureCache = {}
          , chromosomes = []
          , treeMap = {}
          , genome = igv.browser ? igv.browser.genome : null ;
        if (featureList)
            for (featureList.forEach(function(feature) {
                var geneList, chr = feature.chr;
                genome && (chr = genome.getChromosomeName(chr)),
                geneList = featureCache[chr],
                geneList || (chromosomes.push(chr),
                geneList = [],
                featureCache[chr] = geneList),
                geneList.push(feature)
            }),
            i = 0; i < chromosomes.length; i++)
                chr = chromosomes[i],
                treeMap[chr] = buildIntervalTree(featureCache[chr]);
        return treeMap
    }
    function buildIntervalTree(featureList) {
        var i, e, iStart, iEnd, tree, chunkSize, len, subArray;
        for (tree = new igv.IntervalTree,
        len = featureList.length,
        chunkSize = Math.max(10, Math.round(len / 100)),
        featureList.sort(function(f1, f2) {
            return f1.start === f2.start ? 0 : f1.start > f2.start ? 1 : -1
        }),
        i = 0; len > i; i += chunkSize)
            e = Math.min(len, i + chunkSize),
            subArray = featureList.slice(i, e),
            iStart = subArray[0].start,
            iEnd = iStart,
            subArray.forEach(function(feature) {
                iEnd = Math.max(iEnd, feature.end)
            }),
            tree.insert(iStart, iEnd, subArray);
        return tree
    }
    return igv.FeatureCache = function(featureList, range) {
        this.treeMap = buildTreeMap(featureList),
        this.range = range
    }
    ,
    igv.FeatureCache.prototype.queryFeatures = function(chr, start, end) {
        var featureList, intervalFeatures, feature, len, i, tree, intervals;
        return (tree = this.treeMap[chr]) ? (intervals = tree.findOverlapping(start, end),
        0 == intervals.length ? [] : (featureList = [],
        intervals.forEach(function(interval) {
            for (intervalFeatures = interval.value,
            len = intervalFeatures.length,
            i = 0; len > i && (feature = intervalFeatures[i],
            !(feature.start > end)); i++)
                feature.end >= start && featureList.push(feature)
        }),
        featureList)) : []
    }
    ,
    igv.FeatureCache.prototype.allFeatures = function() {
        var allFeatures = []
          , treeMap = this.treeMap;
        if (treeMap)
            for (var key in treeMap)
                if (treeMap.hasOwnProperty(key)) {
                    var tree = treeMap[key];
                    tree.mapIntervals(function(interval) {
                        allFeatures = allFeatures.concat(interval.value)
                    })
                }
        return allFeatures
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    function getParser(format, decode) {
        switch (format) {
        case "vcf":
            return new igv.VcfParser;
        case "seg":
            return new igv.SegParser;
        default:
            return new igv.FeatureParser(format,decode)
        }
    }
    function isIndexable() {
        var configIndexURL = this.config.indexURL
          , type = this.type
          , configIndexed = this.config.indexed;
        return configIndexURL || "wig" != type && 0 != configIndexed
    }
    function loadIndex(continuation) {
        var idxFile = this.indexURL;
        this.url.endsWith(".gz") ? (idxFile || (idxFile = this.url + ".tbi"),
        igv.loadBamIndex(idxFile, this.config, continuation, !0)) : (idxFile || (idxFile = this.url + ".idx"),
        igv.loadTribbleIndex(idxFile, this.config, continuation))
    }
    function loadFeaturesNoIndex(continuation, task) {
        var parser = this.parser
          , self = this
          , options = {
            headers: this.config.headers,
            success: function(data) {
                self.header = parser.parseHeader(data),
                continuation(parser.parseFeatures(data))
            },
            task: task
        };
        this.localFile ? igvxhr.loadStringFromFile(this.localFile, options) : igvxhr.loadString(this.url, options)
    }
    return igv.FeatureFileReader = function(config) {
        this.config = config || {},
        config.localFile ? (this.localFile = config.localFile,
        this.filename = config.localFile.name) : (this.url = config.url,
        this.filename = config.url,
        this.indexURL = config.indexURL,
        this.headURL = config.headURL || this.filename),
        config.format || igv.inferTypes(config),
        this.format = config.format,
        this.parser = getParser(this.format, config.decode)
    }
    ,
    igv.FeatureFileReader.prototype.readHeader = function(continuation) {
        function loadHeaderWithIndex(index, continuation) {
            var options = {
                headers: myself.config.headers,
                bgz: index.tabix,
                range: {
                    start: 0,
                    size: 65e3
                },
                success: function(data) {
                    myself.header = myself.parser.parseHeader(data),
                    continuation(myself.header)
                }
            };
            myself.localFile ? igvxhr.loadStringFromFile(myself.localFile, options) : igvxhr.loadString(myself.url, options)
        }
        var myself = this
          , isIndeedIndexible = isIndexable.call(this);
        return void 0 === this.indexed && isIndeedIndexible ? void loadIndex.call(this, function(index) {
            index ? (myself.index = index,
            myself.indexed = !0) : myself.indexed = !1,
            myself.readHeader(continuation)
        }) : void (this.index ? loadHeaderWithIndex(this.index, continuation) : loadFeaturesNoIndex.call(this, function(features) {
            continuation(myself.header, features)
        }))
    }
    ,
    igv.FeatureFileReader.prototype.readFeatures = function(success, task, range) {
        function packFeatures(features) {
            success(features)
        }
        function loadFeaturesWithIndex(index, continuation) {
            var blocks, processed, allFeatures, tabix = index && index.tabix, refId = tabix ? index.sequenceIndexMap[range.chr] : range.chr;
            blocks = index.blocksForRange(refId, range.start, range.end),
            blocks && 0 !== blocks.length ? (allFeatures = [],
            processed = 0,
            blocks.forEach(function(block) {
                var startPos = block.minv.block
                  , startOffset = block.minv.offset
                  , endPos = block.maxv.block + (index.tabix ? 65636 : 0);
                options = {
                    headers: myself.config.headers,
                    range: {
                        start: startPos,
                        size: endPos - startPos + 1
                    },
                    success: function(data) {
                        var inflated, slicedData;
                        data.byteLength;
                        processed++,
                        inflated = index.tabix ? igvxhr.arrayBufferToString(igv.unbgzf(data)) : data,
                        slicedData = startOffset ? inflated.slice(startOffset) : inflated,
                        allFeatures = allFeatures.concat(myself.parser.parseFeatures(slicedData)),
                        processed === blocks.length && (allFeatures.sort(function(a, b) {
                            return a.start - b.start
                        }),
                        continuation(allFeatures))
                    },
                    task: task
                },
                myself.localFile ? igvxhr.loadStringFromFile(myself.localFile, options) : index.tabix ? igvxhr.loadArrayBuffer(myself.url, options) : igvxhr.loadString(myself.url, options)
            })) : success(null )
        }
        var myself = this;
        this.index ? loadFeaturesWithIndex(this.index, packFeatures) : loadFeaturesNoIndex.call(this, packFeatures, task)
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    function parseFixedStep(line) {
        var tokens = line.split(/\s+/)
          , cc = tokens[1].split("=")[1]
          , ss = parseInt(tokens[2].split("=")[1], 10)
          , step = parseInt(tokens[3].split("=")[1], 10)
          , span = tokens.length > 4 ? parseInt(tokens[4].split("=")[1], 10) : 1;
        return {
            type: "fixedStep",
            chrom: cc,
            start: ss,
            step: step,
            span: span,
            index: 0
        }
    }
    function parseVariableStep(line) {
        var tokens = line.split(/\s+/)
          , cc = tokens[1].split("=")[1]
          , span = tokens.length > 2 ? parseInt(tokens[2].split("=")[1], 10) : 1;
        return {
            type: "variableStep",
            chrom: cc,
            span: span
        }
    }
    function parseTrackLine(line) {
        var i, tk, curr, properties = {}, tokens = line.split(/(?:")([^"]+)(?:")|([^\s"]+)(?=\s+|$)/g), tmp = [];
        for (i = 1; i < tokens.length; i++)
            tokens[i] && 0 !== tokens[i].trim().length && (tk = tokens[i].trim(),
            tk.endsWith("=") > 0 ? curr = tk : curr ? (tmp.push(curr + tk),
            curr = void 0) : tmp.push(tk));
        return tmp.forEach(function(str) {
            if (str) {
                var kv = str.split("=", 2);
                2 == kv.length && (properties[kv[0]] = kv[1])
            }
        }),
        properties
    }
    function decodeBed(tokens, ignore) {
        var chr, start, end, id, name, tmp, idName, exonCount, exonSizes, exonStarts, exons, feature, eStart, eEnd;
        if (tokens.length < 3)
            return null ;
        if (chr = tokens[0],
        start = parseInt(tokens[1]),
        end = tokens.length > 2 ? parseInt(tokens[2]) : start + 1,
        feature = {
            chr: chr,
            start: start,
            end: end,
            score: 1e3
        },
        tokens.length > 3) {
            tmp = tokens[3].replace(/"/g, ""),
            idName = tmp.split(";");
            for (var i = 0; i < idName.length; i++) {
                var kv = idName[i].split("=");
                "gene_id" == kv[0] && (id = kv[1]),
                "gene_name" == kv[0] && (name = kv[1])
            }
            feature.id = id ? id : tmp,
            feature.name = name ? name : tmp
        }
        if (tokens.length > 4 && (feature.score = parseFloat(tokens[4])),
        tokens.length > 5 && (feature.strand = tokens[5]),
        tokens.length > 6 && (feature.cdStart = parseInt(tokens[6])),
        tokens.length > 7 && (feature.cdEnd = parseInt(tokens[7])),
        tokens.length > 8 && "." !== tokens[8] && "0" !== tokens[8] && (feature.color = igv.createColorString(tokens[8])),
        tokens.length > 11) {
            exonCount = parseInt(tokens[9]),
            exonSizes = tokens[10].split(","),
            exonStarts = tokens[11].split(","),
            exons = [];
            for (var i = 0; exonCount > i; i++)
                eStart = start + parseInt(exonStarts[i]),
                eEnd = eStart + parseInt(exonSizes[i]),
                exons.push({
                    start: eStart,
                    end: eEnd
                });
            feature.exons = exons
        }
        return feature.popupData = function() {
            var data = [];
            return feature.name && data.push({
                name: "Name",
                value: feature.name
            }),
            ("+" === feature.strand || "-" === feature.strand) && data.push({
                name: "Strand",
                value: feature.strand
            }),
            data
        }
        ,
        feature
    }
    function decodeRefflat(tokens, ignore) {
        if (tokens.length < 10)
            return null ;
        for (var feature = {
            chr: tokens[2],
            start: parseInt(tokens[4]),
            end: parseInt(tokens[5]),
            id: tokens[0],
            name: tokens[1],
            strand: tokens[3],
            cdStart: parseInt(tokens[6]),
            cdEnd: parseInt(tokens[7])
        }, exonCount = parseInt(tokens[8]), exonStarts = tokens[9].split(","), exonEnds = tokens[10].split(","), exons = [], i = 0; exonCount > i; i++)
            exons.push({
                start: parseInt(exonStarts[i]),
                end: parseInt(exonEnds[i])
            });
        return feature.exons = exons,
        feature.popupData = function() {
            return [{
                name: "Name",
                value: feature.name
            }]
        }
        ,
        feature
    }
    function decodePeak(tokens, ignore) {
        var tokenCount, chr, start, end, strand, name, score, qValue, signal, pValue;
        return tokenCount = tokens.length,
        9 > tokenCount ? null  : (chr = tokens[0],
        start = parseInt(tokens[1]),
        end = parseInt(tokens[2]),
        name = tokens[3],
        score = parseFloat(tokens[4]),
        strand = tokens[5].trim(),
        signal = parseFloat(tokens[6]),
        pValue = parseFloat(tokens[7]),
        qValue = parseFloat(tokens[8]),
        0 === score && (score = signal),
        {
            chr: chr,
            start: start,
            end: end,
            name: name,
            score: score,
            strand: strand,
            signal: signal,
            pValue: pValue,
            qValue: qValue
        })
    }
    function decodeBedGraph(tokens, ignore) {
        var chr, start, end, value;
        return tokens.length < 3 ? null  : (chr = tokens[0],
        start = parseInt(tokens[1]),
        end = parseInt(tokens[2]),
        value = parseFloat(tokens[3]),
        {
            chr: chr,
            start: start,
            end: end,
            value: value
        })
    }
    function decodeWig(tokens, wig) {
        var ss, ee, value;
        return "fixedStep" === wig.type ? (ss = wig.index * wig.step + wig.start,
        ee = ss + wig.span,
        value = parseFloat(tokens[0]),
        ++wig.index,
        isNaN(value) ? null  : {
            chr: wig.chrom,
            start: ss,
            end: ee,
            value: value
        }) : "variableStep" === wig.type ? tokens.length < 2 ? null  : (ss = parseInt(tokens[0], 10),
        ee = ss + wig.span,
        value = parseFloat(tokens[1]),
        isNaN(value) ? null  : {
            chr: wig.chrom,
            start: ss,
            end: ee,
            value: value
        }) : decodeBedGraph(tokens)
    }
    function decodeAneu(tokens, ignore) {
        var chr, start, end, feature;
        return tokens.length < 4 ? null  : (chr = tokens[1],
        start = parseInt(tokens[2]),
        end = tokens.length > 3 ? parseInt(tokens[3]) : start + 1,
        feature = {
            chr: chr,
            start: start,
            end: end
        },
        tokens.length > 4 && (feature.score = parseFloat(tokens[4]),
        feature.value = feature.score),
        feature.popupData = function() {
            return [{
                name: "Name",
                value: feature.name
            }]
        }
        ,
        feature)
    }
    function decodeFusionJuncSpan(tokens, ignore) {
        var chr = tokens[0]
          , fusion_name = tokens[1]
          , junction_left = parseInt(tokens[2])
          , junction_right = parseInt(tokens[3])
          , num_junction_reads = parseInt(tokens[4])
          , num_spanning_frags = parseInt(tokens[5])
          , spanning_frag_coords_text = tokens[6]
          , feature = {
            chr: chr,
            name: fusion_name,
            junction_left: junction_left,
            junction_right: junction_right,
            num_junction_reads: num_junction_reads,
            num_spanning_frags: num_spanning_frags,
            spanning_frag_coords: [],
            start: -1,
            end: -1
        }
          , min_coord = junction_left
          , max_coord = junction_right;
        if (num_spanning_frags > 0)
            for (var coord_pairs = spanning_frag_coords_text.split(","), i = 0; i < coord_pairs.length; i++) {
                var split_coords = coord_pairs[i].split("-")
                  , span_left = split_coords[0]
                  , span_right = split_coords[1];
                min_coord > span_left && (min_coord = span_left),
                span_right > max_coord && (max_coord = span_right),
                feature.spanning_frag_coords.push({
                    left: span_left,
                    right: span_right
                })
            }
        return feature.start = min_coord,
        feature.end = max_coord,
        feature.popupData = function() {
            return [{
                name: "Name",
                value: feature.name
            }]
        }
        ,
        feature
    }
    function decodeGtexGWAS(tokens, ignore) {
        var tokenCount, chr, start, end, pValue;
        return tokenCount = tokens.length,
        8 > tokenCount ? null  : (chr = tokens[0],
        start = parseInt(tokens[1]) - 1,
        end = parseInt(tokens[3].split(":")[1]),
        pValue = parseFloat(tokens[5]),
        {
            chr: chr,
            start: start,
            end: end,
            pvalue: pValue
        })
    }
    function decodeGFF(tokens, ignore) {
        var tokenCount, chr, start, end, strand, type, score, phase, attributeString, id, parent, color, name;
        return tokenCount = tokens.length,
        9 > tokenCount ? null  : (chr = tokens[0],
        type = tokens[2],
        start = parseInt(tokens[3]) - 1,
        end = parseInt(tokens[4]),
        score = "." === tokens[5] ? 0 : parseFloat(tokens[5]),
        strand = tokens[6],
        phase = "." === tokens[7] ? 0 : parseInt(tokens[7]),
        attributeString = tokens[8],
        attributeString.split(";").forEach(function(kv) {
            var t = kv.split("=", 2);
            2 == t.length && ("ID" === t[0] ? id = t[1] : "Parent" === t[0] ? parent = t[1] : "name" === t[0].toLowerCase() ? name = t[1] : "color" === t[0].toLowerCase() && (color = igv.createColorString(t[1])))
        }),
        {
            id: id,
            parent: parent,
            name: name,
            type: type,
            chr: chr,
            start: start,
            end: end,
            score: score,
            strand: strand,
            color: color,
            attributeString: attributeString,
            popupData: function() {
                var kvs = this.attributeString.split(";")
                  , pd = [];
                return kvs.forEach(function(kv) {
                    var t = kv.split("=", 2);
                    2 === t.length && pd.push({
                        name: t[0],
                        value: t[1]
                    })
                }),
                pd
            }
        })
    }
    function decodeCustom(tokens, ignore) {
        var feature, chr, start, end, format = this.format, coords = format.coords || 0;
        return tokens.length < 3 ? null  : (chr = tokens[format.chr],
        start = parseInt(tokens[format.start]) - coords,
        end = void 0 !== format.end ? parseInt(tokens[format.end]) : start + 1,
        feature = {
            chr: chr,
            start: start,
            end: end
        },
        format.fields && format.fields.forEach(function(field, index) {
            index != format.chr && index != format.start && index != format.end && (feature[field] = tokens[index])
        }),
        feature)
    }
    var maxFeatureCount = Number.MAX_VALUE;
    return igv.FeatureParser = function(format, decode) {
        var customFormat;
        switch (this.type = format,
        this.skipRows = 0,
        decode && (this.decode = decode),
        format) {
        case "narrowPeak":
        case "broadPeak":
        case "peaks":
            this.decode = decodePeak,
            this.delimiter = /\s+/;
            break;
        case "bedgraph":
            this.decode = decodeBedGraph,
            this.delimiter = /\s+/;
            break;
        case "wig":
            this.decode = decodeWig,
            this.delimiter = /\s+/;
            break;
        case "gff":
            this.decode = decodeGFF,
            this.delimiter = "	";
            break;
        case "aneu":
            this.decode = decodeAneu,
            this.delimiter = "	";
            break;
        case "FusionJuncSpan":
            this.decode = decodeFusionJuncSpan,
            this.delimiter = /\s+/;
            break;
        case "gtexGWAS":
            this.skipRows = 1,
            this.decode = decodeGtexGWAS,
            this.delimiter = "	";
            break;
        case "refflat":
            this.decode = decodeRefflat,
            this.delimiter = "	";
            break;
        default:
            customFormat = igv.browser.getFormat(format),
            void 0 !== customFormat ? (this.decode = decodeCustom,
            this.format = customFormat,
            this.delimiter = customFormat.delimiter || "	") : (this.decode = decodeBed,
            this.delimiter = /\s+/)
        }
    }
    ,
    igv.FeatureParser.prototype.parseHeader = function(data) {
        var line, i, header, lines = data.splitLines(), len = lines.length;
        for (i = 0; len > i && (line = lines[i],
        line.startsWith("track") || line.startsWith("#") || line.startsWith("browser")); i++)
            line.startsWith("track") && (header = parseTrackLine(line));
        return header
    }
    ,
    igv.FeatureParser.prototype.parseFeatures = function(data) {
        if (!data)
            return null ;
        var wig, feature, tokens, line, i, j, lines = data.splitLines(), len = lines.length, allFeatures = [], cnt = 0, decode = this.decode, type = this.type, delimiter = this.delimiter || "	";
        for (i = this.skipRows; len > i; i++)
            line = lines[i],
            line.startsWith("track") || line.startsWith("#") || line.startsWith("browser") || ("wig" === type && line.startsWith("fixedStep") ? wig = parseFixedStep(line) : "wig" === type && line.startsWith("variableStep") ? wig = parseVariableStep(line) : (tokens = lines[i].split(delimiter),
            tokens.length < 1 || (feature = decode.call(this, tokens, wig),
            feature && (allFeatures.length < maxFeatureCount ? allFeatures.push(feature) : (j = Math.floor(Math.random() * cnt),
            maxFeatureCount > j && (allFeatures[j] = feature)),
            cnt++))));
        return allFeatures
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    function addFeaturesToDB(featureList) {
        featureList.forEach(function(feature) {
            feature.name && (igv.browser.featureDB[feature.name.toUpperCase()] = feature)
        })
    }
    function packFeatures(features, maxRows) {
        function pack(featureList, maxRows) {
            var rows = [];
            featureList.sort(function(a, b) {
                return a.start - b.start
            }),
            rows.push(-1e3),
            featureList.forEach(function(feature) {
                var r, len = Math.min(rows.length, maxRows), start = feature.start;
                for (r = 0; len > r; r++)
                    if (start > rows[r])
                        return feature.row = r,
                        void (rows[r] = feature.end);
                feature.row = r,
                rows[r] = feature.end;
            })
        }
        if (null  != features && 0 !== features.length) {
            var chrFeatureMap = {}
              , chrs = [];
            features.forEach(function(feature) {
                var chr = feature.chr
                  , flist = chrFeatureMap[chr];
                flist || (flist = [],
                chrFeatureMap[chr] = flist,
                chrs.push(chr)),
                flist.push(feature)
            }),
            chrs.forEach(function(chr) {
                pack(chrFeatureMap[chr], maxRows)
            })
        }
    }
    return igv.FeatureSource = function(config) {
        if (this.config = config || {},
        "ga4gh" === config.sourceType) {
            var wrappedReader = new igv.Ga4ghVariantReader(config);
            this.reader = {
                readFeatures: function(success, task, range) {
                    return wrappedReader.readFeatures(range.chr, range.start, range.end, success, task)
                }
            }
        } else
            "immvar" === config.sourceType ? this.reader = new igv.ImmVarReader(config) : "eqtl" === config.type ? "gtex-ws" === config.sourceType ? this.reader = new igv.GtexReader(config) : this.reader = new igv.GtexFileReader(config) : this.reader = new igv.FeatureFileReader(config)
    }
    ,
    igv.FeatureSource.prototype.getHeader = function(continuation) {
        var self = this
          , maxRows = this.config.maxRows || 500;
        this.reader.readHeader ? this.reader.readHeader(function(header, features) {
            features && (packFeatures(features, maxRows),
            self.featureCache = new igv.FeatureCache(features),
            self.config.searchable && addFeaturesToDB(features)),
            continuation(header)
        }) : continuation(null )
    }
    ,
    igv.FeatureSource.prototype.getFeatures = function(chr, bpStart, bpEnd, success, task) {
        var self = this
          , genomicInterval = new igv.GenomicInterval(chr,bpStart,bpEnd)
          , featureCache = this.featureCache
          , maxRows = this.config.maxRows || 500;
        featureCache && (void 0 === featureCache.range || featureCache.range.containsRange(genomicInterval)) ? success(this.featureCache.queryFeatures(chr, bpStart, bpEnd)) : this.reader.readFeatures(function(featureList) {
            var isIndexed = self.reader.indexed || "ga4gh" === self.config.sourceType || "immvar" === self.config.sourceType || "gtex" === self.config.sourceType;
            self.featureCache = isIndexed ? new igv.FeatureCache(featureList,genomicInterval) : new igv.FeatureCache(featureList),
            self.config.searchable && addFeaturesToDB(featureList),
            packFeatures(featureList, maxRows),
            success(self.featureCache.queryFeatures(chr, bpStart, bpEnd))
        }, task, genomicInterval)
    }
    ,
    igv.FeatureSource.prototype.allFeatures = function(success) {
        this.getFeatureCache(function(featureCache) {
            success(featureCache.allFeatures())
        })
    }
    ,
    igv.FeatureSource.prototype.getFeatureCache = function(success) {
        var myself = this;
        this.featureCache ? success(this.featureCache) : this.reader.readFeatures(function(featureList) {
            myself.featureCache = new igv.FeatureCache(featureList),
            success(myself.featureCache)
        })
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    function extractPopupData(feature) {
        var data = [];
        for (var property in feature)
            feature.hasOwnProperty(property) && "chr" !== property && "start" !== property && "end" !== property && "row" !== property && igv.isStringOrNumber(feature[property]) && data.push({
                name: property,
                value: feature[property]
            });
        return data
    }
    function renderFeature(feature, bpStart, xScale, pixelHeight, ctx) {
        var px, px1, pw, x, e, exonCount, cy, direction, exon, ePx, ePx1, ePw, transform, fontStyle, py = 5, step = this.arrowSpacing, h = this.featureHeight, color = this.color;
        if (this.config.colorBy) {
            var colorByValue = feature[this.config.colorBy.field];
            colorByValue && (color = this.config.colorBy.pallete[colorByValue])
        } else
            feature.color && (color = feature.color);
        if (ctx.fillStyle = color,
        ctx.strokeStyle = color,
        px = Math.round((feature.start - bpStart) / xScale),
        px1 = Math.round((feature.end - bpStart) / xScale),
        pw = px1 - px,
        3 > pw && (pw = 3,
        px -= 1),
        "SQUISHED" === this.displayMode && void 0 != feature.row ? (h /= 2,
        py = this.squishedRowHeight * feature.row) : "EXPANDED" === this.displayMode && void 0 != feature.row && (py = this.expandedRowHeight * feature.row),
        exonCount = feature.exons ? feature.exons.length : 0,
        0 == exonCount)
            ctx.fillRect(px, py, pw, h);
        else {
            for (cy = py + h / 2,
            igv.graphics.strokeLine(ctx, px + 1, cy, px1 - 1, cy),
            direction = "+" == feature.strand ? 1 : -1,
            x = px + step / 2; px1 > x; x += step)
                igv.graphics.strokeLine(ctx, x - 2 * direction, cy - 2, x, cy),
                igv.graphics.strokeLine(ctx, x - 2 * direction, cy + 2, x, cy);
            for (e = 0; exonCount > e; e++)
                if (exon = feature.exons[e],
                ePx = Math.round((exon.start - bpStart) / xScale),
                ePx1 = Math.round((exon.end - bpStart) / xScale),
                ePw = Math.max(1, ePx1 - ePx),
                ctx.fillRect(ePx, py, ePw, h),
                ePw > step + 5) {
                    for (ctx.fillStyle = "white",
                    ctx.strokeStyle = "white",
                    x = ePx + step / 2; ePx1 > x; x += step)
                        igv.graphics.strokeLine(ctx, x - 2 * direction, cy - 2, x, cy),
                        igv.graphics.strokeLine(ctx, x - 2 * direction, cy + 2, x, cy);
                    ctx.fillStyle = color,
                    ctx.strokeStyle = color
                }
        }
        fontStyle = {
            font: "10px PT Sans",
            fillStyle: this.color,
            strokeStyle: this.color
        };
        var geneColor;
        if (igv.browser.selection && "genes" === this.config.featureType && void 0 !== feature.name && (geneColor = igv.browser.selection.colorForGene(feature.name)),
        (px1 - px > 20 || geneColor) && "SQUISHED" != this.displayMode && void 0 !== feature.name) {
            var geneFontStyle;
            geneFontStyle = geneColor ? {
                font: "10px PT Sans",
                fillStyle: geneColor,
                strokeStyle: geneColor
            } : fontStyle,
            "COLLAPSED" === this.displayMode && "SLANT" === this.labelDisplayMode && (transform = {
                rotate: {
                    angle: 45
                }
            });
            var labelY = transform ? py + 20 : py + 25;
            igv.graphics.fillText(ctx, feature.name, px + (px1 - px) / 2, labelY, geneFontStyle, transform)
        }
    }
    function renderVariant(variant, bpStart, xScale, pixelHeight, ctx) {
        var px, px1, pw, style, py = 20, h = 10;
        switch (px = Math.round((variant.start - bpStart) / xScale),
        px1 = Math.round((variant.end - bpStart) / xScale),
        pw = Math.max(1, px1 - px),
        3 > pw && (pw = 3,
        px -= 1),
        variant.genotype) {
        case "HOMVAR":
            style = this.homvarColor;
            break;
        case "HETVAR":
            style = this.hetvarColor;
            break;
        default:
            style = this.color
        }
        ctx.fillStyle = style,
        ctx.fillRect(px, py, pw, h)
    }
    function renderFusionJuncSpan(feature, bpStart, xScale, pixelHeight, ctx) {
        var px = Math.round((feature.start - bpStart) / xScale)
          , px1 = Math.round((feature.end - bpStart) / xScale);
        pw = px1 - px,
        pw < 3 && (pw = 3,
        px -= 1);
        var py = 5
          , rowHeight = "EXPANDED" === this.displayMode ? this.expandedRowHeight : this.squishedRowHeight;
        "SQUISHED" === this.displayMode && void 0 != feature.row ? py = rowHeight * feature.row : "EXPANDED" === this.displayMode && void 0 != feature.row && (py = rowHeight * feature.row);
        var cy = py + .5 * rowHeight
          , top_y = cy - .5 * rowHeight
          , bottom_y = cy + .5 * rowHeight
          , junction_left_px = Math.round((feature.junction_left - bpStart) / xScale)
          , junction_right_px = Math.round((feature.junction_right - bpStart) / xScale);
        ctx.beginPath(),
        ctx.moveTo(junction_left_px, cy),
        ctx.bezierCurveTo(junction_left_px, top_y, junction_right_px, top_y, junction_right_px, cy),
        ctx.lineWidth = 1 + Math.log(feature.num_junction_reads) / Math.log(2),
        ctx.strokeStyle = "blue",
        ctx.stroke();
        for (var spanning_coords = feature.spanning_frag_coords, i = 0; i < spanning_coords.length; i++) {
            var spanning_info = spanning_coords[i]
              , span_left_px = Math.round((spanning_info.left - bpStart) / xScale)
              , span_right_px = Math.round((spanning_info.right - bpStart) / xScale);
            ctx.beginPath(),
            ctx.moveTo(span_left_px, cy),
            ctx.bezierCurveTo(span_left_px, bottom_y, span_right_px, bottom_y, span_right_px, cy),
            ctx.lineWidth = 1,
            ctx.strokeStyle = "purple",
            ctx.stroke()
        }
    }
    return igv.FeatureTrack = function(config) {
        igv.configTrack(this, config),
        this.displayMode = config.displayMode || "COLLAPSED",
        this.labelDisplayMode = config.labelDisplayMode,
        this.collapsedHeight = config.collapsedHeight || this.height,
        this.expandedRowHeight = config.expandedRowHeight || 30,
        this.squishedRowHeight = config.squishedRowHeight || 15,
        this.featureHeight = config.featureHeight || 14,
        this.featureSource = new igv.FeatureSource(this.config),
        config.render ? this.render = config.render : "variant" === config.featureType ? (this.render = renderVariant,
        this.homvarColor = "rgb(17,248,254)",
        this.hetvarColor = "rgb(34,12,253)") : "FusionJuncSpan" === config.featureType ? (this.render = renderFusionJuncSpan,
        this.height = config.height || 50,
        this.autoHeight = !1) : (this.render = renderFeature,
        this.arrowSpacing = 30)
    }
    ,
    igv.FeatureTrack.prototype.getHeader = function(continuation) {
        var track = this;
        this.featureSource.getHeader(function(header) {
            header && (header.name && !track.config.name && (track.name = header.name),
            header.color && !track.config.color && (track.color = "rgb(" + header.color + ")")),
            continuation(header)
        })
    }
    ,
    igv.FeatureTrack.prototype.getFeatures = function(chr, bpStart, bpEnd, continuation, task) {
        this.visibilityWindow && igv.browser.trackViewportWidthBP() > this.visibilityWindow ? continuation({
            exceedsVisibilityWindow: !0
        }) : this.featureSource.getFeatures(chr, bpStart, bpEnd, continuation, task)
    }
    ,
    igv.FeatureTrack.prototype.computePixelHeight = function(features) {
        if ("COLLAPSED" === this.displayMode)
            return this.collapsedHeight;
        var maxRow = 0;
        return features.forEach(function(feature) {
            feature.row && feature.row > maxRow && (maxRow = feature.row)
        }),
        (maxRow + 1) * ("SQUISHED" === this.displayMode ? this.squishedRowHeight : this.expandedRowHeight)
    }
    ,
    igv.FeatureTrack.prototype.draw = function(options) {
        var track = this
          , featureList = options.features
          , ctx = options.context
          , bpPerPixel = options.bpPerPixel
          , bpStart = options.bpStart
          , pixelWidth = options.pixelWidth
          , pixelHeight = options.pixelHeight
          , bpEnd = bpStart + pixelWidth * bpPerPixel + 1
          , zoomInNoticeFontStyle = {
            font: "16px PT Sans",
            fillStyle: "rgba(64, 64, 64, 1)",
            strokeStyle: "rgba(64, 64, 64, 1)"
        };
        if (igv.graphics.fillRect(ctx, 0, 0, pixelWidth, pixelHeight, {
            fillStyle: "rgb(255, 255, 255)"
        }),
        options.features.exceedsVisibilityWindow)
            for (var x = 200; pixelWidth > x; x += 400)
                igv.graphics.fillText(ctx, "Zoom in to see features", x, 20, zoomInNoticeFontStyle);
        else if (featureList) {
            for (var gene, i = 0, len = featureList.length; len > i; i++)
                if (gene = featureList[i],
                !(gene.end < bpStart)) {
                    if (gene.start > bpEnd)
                        break;
                    track.render.call(this, gene, bpStart, bpPerPixel, pixelHeight, ctx)
                }
        } else
            console.log("No feature list")
    }
    ,
    igv.FeatureTrack.prototype.popupData = function(genomicLocation, xOffset, yOffset) {
        if (this.featureSource.featureCache) {
            var row, chr = igv.browser.referenceFrame.chr, tolerance = 2 * igv.browser.referenceFrame.bpPerPixel, featureList = this.featureSource.featureCache.queryFeatures(chr, genomicLocation - tolerance, genomicLocation + tolerance);
            if ("COLLAPSED" != this.displayMode && (row = Math.floor("SQUISHED" === this.displayMode ? yOffset / this.squishedRowHeight : yOffset / this.expandedRowHeight)),
            featureList && featureList.length > 0) {
                var popupData = [];
                return featureList.forEach(function(feature) {
                    if (feature.end >= genomicLocation - tolerance && feature.start <= genomicLocation + tolerance && (void 0 === row || void 0 === feature.row || row === feature.row)) {
                        var featureData;
                        featureData = feature.popupData ? feature.popupData(genomicLocation) : extractPopupData(feature),
                        featureData && (popupData.length > 0 && popupData.push("<HR>"),
                        Array.prototype.push.apply(popupData, featureData))
                    }
                }),
                popupData
            }
        }
        return null 
    }
    ,
    igv.FeatureTrack.prototype.popupMenuItems = function(popover) {
        var myself = this
          , menuItems = []
          , lut = {
            COLLAPSED: "Collapse",
            SQUISHED: "Squish",
            EXPANDED: "Expand"
        }
          , checkMark = '<i class="fa fa-check fa-check-shim"></i>'
          , checkMarkNone = '<i class="fa fa-check fa-check-shim fa-check-hidden"></i>'
          , trackMenuItem = '<div class="igv-track-menu-item">'
          , trackMenuItemFirst = '<div class="igv-track-menu-item igv-track-menu-border-top">';
        return menuItems.push(igv.colorPickerMenuItem(popover, this.trackView)),
        menuItems.push(igv.dataRangeMenuItem(popover, this.trackView)),
        ["COLLAPSED", "SQUISHED", "EXPANDED"].forEach(function(displayMode, index) {
            var chosen, str;
            chosen = 0 === index ? trackMenuItemFirst : trackMenuItem,
            str = displayMode === myself.displayMode ? chosen + checkMark + lut[displayMode] + "</div>" : chosen + checkMarkNone + lut[displayMode] + "</div>",
            menuItems.push({
                object: $(str),
                click: function() {
                    popover.hide(),
                    myself.displayMode = displayMode,
                    myself.trackView.update()
                }
            })
        }),
        menuItems
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    var sampleColumn = (Number.MAX_VALUE,
    0)
      , chrColumn = 1
      , startColumn = 2
      , endColumn = 3;
    return igv.SegParser = function() {}
    ,
    igv.SegParser.prototype.parseHeader = function(data) {
        var line, i, tokens, lines = data.splitLines(), len = lines.length;
        for (i = 0; len > i; i++)
            if (line = lines[i],
            !line.startsWith("#"))
                return tokens = line.split("	"),
                this.header = {
                    headings: tokens,
                    lineCount: i + 1
                },
                this.header;
        return this.header
    }
    ,
    igv.SegParser.prototype.parseFeatures = function(data) {
        var tokens, line, i, dataColumn, lines = data ? data.splitLines() : [], len = lines.length, allFeatures = [];
        for (this.header || (this.header = this.parseHeader(data)),
        dataColumn = this.header.headings.length - 1,
        i = this.header.lineCount; len > i; i++)
            line = lines[i],
            tokens = lines[i].split("	"),
            tokens.length > dataColumn && allFeatures.push({
                sample: tokens[sampleColumn],
                chr: tokens[chrColumn],
                start: parseInt(tokens[startColumn]),
                end: parseInt(tokens[endColumn]),
                value: parseFloat(tokens[dataColumn])
            });
        return allFeatures
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    var sortDirection = 1;
    return igv.SegTrack = function(config) {
        igv.configTrack(this, config),
        this.displayMode = config.displayMode || "SQUISHED",
        this.maxHeight = config.maxHeight || 500,
        this.sampleSquishHeight = config.sampleSquishHeight || 2,
        this.sampleExpandHeight = config.sampleExpandHeight || 12,
        this.posColorScale = config.posColorScale || new igv.GradientColorScale({
            low: .1,
            lowR: 255,
            lowG: 255,
            lowB: 255,
            high: 1.5,
            highR: 255,
            highG: 0,
            highB: 0
        }),
        this.negColorScale = config.negColorScale || new igv.GradientColorScale({
            low: -1.5,
            lowR: 0,
            lowG: 0,
            lowB: 255,
            high: -.1,
            highR: 255,
            highG: 255,
            highB: 255
        }),
        this.sampleCount = 0,
        this.samples = {},
        this.sampleNames = [],
        this.featureSource = new igv.FeatureSource(this.config)
    }
    ,
    igv.SegTrack.prototype.popupMenuItems = function(popover) {
        var myself = this;
        return [{
            name: "SQUISHED" === this.displayMode ? "Expand sample hgt" : "Squish sample hgt",
            click: function() {
                popover.hide(),
                myself.toggleSampleHeight()
            }
        }]
    }
    ,
    igv.SegTrack.prototype.toggleSampleHeight = function() {
        this.displayMode = "SQUISHED" === this.displayMode ? "EXPANDED" : "SQUISHED",
        this.trackView.update()
    }
    ,
    igv.SegTrack.prototype.getFeatures = function(chr, bpStart, bpEnd, continuation, task) {
        this.featureSource.getFeatures(chr, bpStart, bpEnd, continuation, task)
    }
    ,
    igv.SegTrack.prototype.draw = function(options) {
        function checkForLog(featureList) {
            var i;
            if (void 0 === myself.isLog)
                for (myself.isLog = !1,
                i = 0; i < featureList.length; i++)
                    if (featureList[i].value < 0)
                        return void (myself.isLog = !0)
        }
        var featureList, ctx, bpPerPixel, bpStart, pixelWidth, pixelHeight, bpEnd, segment, len, sample, i, y, color, value, px, px1, pw, xScale, sampleHeight, myself = this;
        if (sampleHeight = "SQUISHED" === this.displayMode ? this.sampleSquishHeight : this.sampleExpandHeight,
        ctx = options.context,
        pixelWidth = options.pixelWidth,
        pixelHeight = options.pixelHeight,
        igv.graphics.fillRect(ctx, 0, 0, pixelWidth, pixelHeight, {
            fillStyle: "rgb(255, 255, 255)"
        }),
        featureList = options.features) {
            for (bpPerPixel = options.bpPerPixel,
            bpStart = options.bpStart,
            bpEnd = bpStart + pixelWidth * bpPerPixel + 1,
            xScale = bpPerPixel,
            i = 0,
            len = featureList.length; len > i; i++)
                sample = featureList[i].sample,
                this.samples.hasOwnProperty(sample) || (this.samples[sample] = myself.sampleCount,
                this.sampleNames.push(sample),
                this.sampleCount++);
            for (checkForLog(featureList),
            i = 0,
            len = featureList.length; len > i; i++)
                if (segment = featureList[i],
                !(segment.end < bpStart)) {
                    if (segment.start > bpEnd)
                        break;
                    y = myself.samples[segment.sample] * sampleHeight,
                    value = segment.value,
                    myself.isLog || (value = Math.log2(value / 2)),
                    color = -.1 > value ? myself.negColorScale.getColor(value) : value > .1 ? myself.posColorScale.getColor(value) : "white",
                    px = Math.round((segment.start - bpStart) / xScale),
                    px1 = Math.round((segment.end - bpStart) / xScale),
                    pw = Math.max(1, px1 - px),
                    igv.graphics.fillRect(ctx, px, y, pw, sampleHeight, {
                        fillStyle: color
                    })
                }
        } else
            console.log("No feature list")
    }
    ,
    igv.SegTrack.prototype.computePixelHeight = function(features) {
        var sampleHeight = "SQUISHED" === this.displayMode ? this.sampleSquishHeight : this.sampleExpandHeight;
        for (i = 0,
        len = features.length; i < len; i++)
            sample = features[i].sample,
            this.samples.hasOwnProperty(sample) || (this.samples[sample] = this.sampleCount,
            this.sampleNames.push(sample),
            this.sampleCount++);
        return this.sampleCount * sampleHeight
    }
    ,
    igv.SegTrack.prototype.sortSamples = function(chr, bpStart, bpEnd, direction, callback) {
        var segment, min, max, f, i, s, sampleNames, myself = this, len = bpEnd - bpStart, scores = {};
        this.featureSource.getFeatures(chr, bpStart, bpEnd, function(featureList) {
            for (i = 0,
            len = featureList.length; len > i; i++)
                if (segment = featureList[i],
                !(segment.end < bpStart)) {
                    if (segment.start > bpEnd)
                        break;
                    min = Math.max(bpStart, segment.start),
                    max = Math.min(bpEnd, segment.end),
                    f = (max - min) / len,
                    s = scores[segment.sample],
                    s || (s = 0),
                    scores[segment.sample] = s + f * segment.value
                }
            for (sampleNames = Object.keys(myself.samples),
            sampleNames.sort(function(a, b) {
                var s1 = scores[a]
                  , s2 = scores[b];
                return s1 || (s1 = Number.MAX_VALUE),
                s2 || (s2 = Number.MAX_VALUE),
                s1 == s2 ? 0 : s1 > s2 ? direction : -1 * direction
            }),
            i = 0; i < sampleNames.length; i++)
                myself.samples[sampleNames[i]] = i;
            myself.sampleNames = sampleNames,
            callback()
        })
    }
    ,
    igv.SegTrack.prototype.altClick = function(genomicLocation, event) {
        var refFrame = igv.browser.referenceFrame
          , bpWidth = refFrame.toBP(2.5)
          , bpStart = genomicLocation - bpWidth
          , bpEnd = genomicLocation + bpWidth
          , chr = refFrame.chr
          , myself = this;
        this.sortSamples(chr, bpStart, bpEnd, sortDirection, function() {
            myself.trackView.update(),
            $(myself.trackView.viewportDiv).scrollTop(0)
        }),
        sortDirection *= -1
    }
    ,
    igv.SegTrack.prototype.popupData = function(genomicLocation, xOffset, yOffset) {
        var sampleName, row, items, sampleHeight = "SQUISHED" === this.displayMode ? this.sampleSquishHeight : this.sampleExpandHeight;
        if (row = Math.floor(yOffset / sampleHeight),
        row < this.sampleNames.length) {
            if (sampleName = this.sampleNames[row],
            items = [{
                name: "Sample",
                value: sampleName
            }],
            this.featureSource.featureCache) {
                var chr = igv.browser.referenceFrame.chr
                  , featureList = this.featureSource.featureCache.queryFeatures(chr, genomicLocation, genomicLocation);
                featureList.forEach(function(f) {
                    f.sample === sampleName && items.push({
                        name: "Value",
                        value: f.value
                    })
                })
            }
            return items
        }
        return null 
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    return igv.loadTribbleIndex = function(indexFile, config, continuation) {
        function readHeader(parser) {
            var version = (parser.getInt(),
            parser.getInt(),
            parser.getInt());
            parser.getString(),
            parser.getLong(),
            parser.getLong(),
            parser.getString();
            if (flags = parser.getInt(),
            3 > version && (flags & SEQUENCE_DICTIONARY_FLAG) == SEQUENCE_DICTIONARY_FLAG,
            version >= 3)
                for (var nProperties = parser.getInt(); nProperties-- > 0; ) {
                    parser.getString(),
                    parser.getString()
                }
        }
        function readLinear(parser) {
            var chr = parser.getString()
              , blockMax = 0;
            genome && (chr = genome.getChromosomeName(chr));
            for (var nBins = (parser.getInt(),
            parser.getInt()), blocks = (parser.getInt(),
            parser.getInt() > 0,
            parser.getInt(),
            new Array), pos = parser.getLong(), blocks = new Array, binNumber = 0; nBins > binNumber; binNumber++) {
                var nextPos = parser.getLong();
                blocks.push({
                    min: pos,
                    max: nextPos
                }),
                pos = nextPos,
                nextPos > blockMax && (blockMax = nextPos)
            }
            return {
                chr: chr,
                blocks: blocks
            }
        }
        var genome = igv.browser ? igv.browser.genome : null ;
        igvxhr.loadArrayBuffer(indexFile, {
            headers: config.headers,
            success: function(arrayBuffer) {
                if (arrayBuffer) {
                    var index = {}
                      , parser = new igv.BinaryParser(new DataView(arrayBuffer));
                    readHeader(parser);
                    for (var nChrs = parser.getInt(); nChrs-- > 0; ) {
                        var chrIdx = readLinear(parser);
                        index[chrIdx.chr] = chrIdx
                    }
                    continuation(new igv.TribbleIndex(index))
                } else
                    continuation(null )
            },
            error: function(ignore, xhr) {
                continuation(null )
            }
        })
    }
    ,
    igv.TribbleIndex = function(chrIndexTable) {
        this.chrIndex = chrIndexTable
    }
    ,
    igv.TribbleIndex.prototype.blocksForRange = function(queryChr, min, max) {
        var chrIdx = this.chrIndex[queryChr];
        if (chrIdx) {
            var blocks = chrIdx.blocks
              , lastBlock = blocks[blocks.length - 1]
              , mergedBlock = {
                minv: {
                    block: blocks[0].min,
                    offset: 0
                },
                maxv: {
                    block: lastBlock.max,
                    offset: 0
                }
            };
            return [mergedBlock]
        }
        return null 
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    function translateCigar(cigar) {
        var cigarUnit, opLen, opLtr, lengthOnRef = 0, cigarArray = [];
        for (i = 0; i < cigar.length; i++)
            cigarUnit = cigar[i],
            opLtr = CigarOperationTable[cigarUnit.operation],
            opLen = parseInt(cigarUnit.operationLength),
            ("M" == opLtr || "EQ" == opLtr || "X" == opLtr || "D" == opLtr || "N" == opLtr || "=" == opLtr) && (lengthOnRef += opLen),
            cigarArray.push({
                len: opLen,
                ltr: opLtr
            });
        return {
            lengthOnRef: lengthOnRef,
            array: cigarArray
        }
    }
    function translateCigar(cigar) {
        var cigarUnit, opLen, opLtr, lengthOnRef = 0, cigarArray = [];
        for (i = 0; i < cigar.length; i++)
            cigarUnit = cigar[i],
            opLtr = CigarOperationTable[cigarUnit.operation],
            opLen = parseInt(cigarUnit.operationLength),
            ("M" == opLtr || "EQ" == opLtr || "X" == opLtr || "D" == opLtr || "N" == opLtr || "=" == opLtr) && (lengthOnRef += opLen),
            cigarArray.push({
                len: opLen,
                ltr: opLtr
            });
        return {
            lengthOnRef: lengthOnRef,
            array: cigarArray
        }
    }
    function makeBlocks(record, cigarArray) {
        for (var blockSeq, blockQuals, gapType, blocks = [], seqOffset = 0, pos = record.start, len = cigarArray.length, i = 0; len > i; i++) {
            var c = cigarArray[i];
            switch (c.ltr) {
            case "H":
                break;
            case "P":
                break;
            case "S":
                seqOffset += c.len,
                gapType = "S";
                break;
            case "N":
                pos += c.len,
                gapType = "N";
                break;
            case "D":
                pos += c.len,
                gapType = "D";
                break;
            case "I":
                seqOffset += c.len;
                break;
            case "M":
            case "EQ":
            case "=":
            case "X":
                blockSeq = "*" === record.seq ? "*" : record.seq.substr(seqOffset, c.len),
                blockQuals = "*" === record.qual ? "*" : record.qual.slice(seqOffset, c.len),
                blocks.push({
                    start: pos,
                    len: c.len,
                    seq: blockSeq,
                    qual: blockQuals,
                    gapType: gapType
                }),
                seqOffset += c.len,
                pos += c.len;
                break;
            default:
                console.log("Error processing cigar element: " + c.len + c.ltr)
            }
        }
        return blocks
    }
    var CigarOperationTable = {
        ALIGNMENT_MATCH: "M",
        INSERT: "I",
        DELETE: "D",
        SKIP: "N",
        CLIP_SOFT: "S",
        CLIP_HARD: "H",
        PAD: "P",
        SEQUENCE_MATCH: "=",
        SEQUENCE_MISMATCH: "X"
    };
    return igv.Ga4ghAlignment = function(json, genome) {
        this.readName = json.fragmentName,
        this.properPlacement = json.properPlacement,
        this.duplicateFragment = json.duplicateFragment,
        this.numberReads = json.numberReads,
        this.fragmentLength = json.fragmentLength,
        this.readNumber = json.readNumber,
        this.failedVendorQualityChecks = json.failedVendorQualityChecks,
        this.secondaryAlignment = json.secondaryAlignment,
        this.supplementaryAlignment = json.supplementaryAlignment,
        this.seq = json.alignedSequence,
        this.qual = json.alignedQuality,
        this.tagDict = json.info,
        alignment = json.alignment,
        alignment ? (this.mapped = !0,
        this.chr = json.alignment.position.referenceName,
        genome && (this.chr = genome.getChromosomeName(this.chr)),
        this.start = parseInt(json.alignment.position.position),
        this.strand = !json.alignment.position.reverseStrand,
        this.mq = json.alignment.mappingQuality,
        cigarDecoded = translateCigar(json.alignment.cigar),
        this.lengthOnRef = cigarDecoded.lengthOnRef,
        this.blocks = makeBlocks(this, cigarDecoded.array)) : this.mapped = !1,
        json.nextMatePosition && (this.mate = {
            chr: json.nextMatePosition.referenceFrame,
            position: parseInt(json.nextMatePosition.position),
            strand: !json.nextMatePosition.reverseStrand
        },
        this.info = json.info)
    }
    ,
    igv.Ga4ghAlignment.prototype.isMapped = function() {
        return this.mapped
    }
    ,
    igv.Ga4ghAlignment.prototype.isPaired = function() {
        return this.numberReads && this.numberReads > 1
    }
    ,
    igv.Ga4ghAlignment.prototype.isProperPair = function() {
        return void 0 === this.properPlacement || this.properPlacement
    }
    ,
    igv.Ga4ghAlignment.prototype.isFistOfPair = function() {
        return this.readNumber && 0 === this.readNumber
    }
    ,
    igv.Ga4ghAlignment.prototype.isSecondOfPair = function() {
        return this.readNumber && 1 === this.readNumber
    }
    ,
    igv.Ga4ghAlignment.prototype.isNotPrimary = function() {
        return this.secondaryAlignment
    }
    ,
    igv.Ga4ghAlignment.prototype.isSupplementary = function() {
        return this.supplementaryAlignment
    }
    ,
    igv.Ga4ghAlignment.prototype.isFailsVendorQualityCheck = function() {
        return this.failedVendorQualityChecks
    }
    ,
    igv.Ga4ghAlignment.prototype.isDuplicate = function() {
        return this.duplicateFragment
    }
    ,
    igv.Ga4ghAlignment.prototype.isMateMapped = function() {
        return this.mate
    }
    ,
    igv.Ga4ghAlignment.prototype.mateStrand = function() {
        return this.mate && this.mate.strand
    }
    ,
    igv.Ga4ghAlignment.prototype.tags = function() {
        return this.info
    }
    ,
    igv.Ga4ghAlignment.prototype.popupData = function(genomicLocation) {
        function yesNo(bool) {
            return bool ? "Yes" : "No"
        }
        var isFirst;
        nameValues = [],
        nameValues.push({
            name: "Read Name",
            value: this.readName
        }),
        nameValues.push("<hr>"),
        nameValues.push({
            name: "Alignment Start",
            value: igv.numberFormatter(1 + this.start),
            borderTop: !0
        }),
        nameValues.push({
            name: "Read Strand",
            value: !0 === this.strand ? "(+)" : "(-)",
            borderTop: !0
        }),
        nameValues.push({
            name: "Cigar",
            value: this.cigar
        }),
        nameValues.push({
            name: "Mapped",
            value: yesNo(this.isMapped())
        }),
        nameValues.push({
            name: "Mapping Quality",
            value: this.mq
        }),
        nameValues.push({
            name: "Secondary",
            value: yesNo(this.isNotPrimary())
        }),
        nameValues.push({
            name: "Supplementary",
            value: yesNo(this.isSupplementary())
        }),
        nameValues.push({
            name: "Duplicate",
            value: yesNo(this.isDuplicate())
        }),
        nameValues.push({
            name: "Failed QC",
            value: yesNo(this.isFailsVendorQualityCheck())
        }),
        this.isPaired() && (nameValues.push("<hr>"),
        nameValues.push({
            name: "First in Pair",
            value: !this.isSecondOfPair(),
            borderTop: !0
        }),
        nameValues.push({
            name: "Mate is Mapped",
            value: yesNo(this.isMateMapped())
        }),
        this.isMapped() && (nameValues.push({
            name: "Mate Start",
            value: this.matePos
        }),
        nameValues.push({
            name: "Mate Strand",
            value: this.mateStrand() ? "(-)" : "(+)"
        }),
        nameValues.push({
            name: "Insert Size",
            value: this.fragmentLength
        }))),
        nameValues.push("<hr>"),
        this.tags(),
        isFirst = !0;
        for (var key in this.tagDict)
            this.tagDict.hasOwnProperty(key) && (isFirst ? (nameValues.push({
                name: key,
                value: this.tagDict[key],
                borderTop: !0
            }),
            isFirst = !1) : nameValues.push({
                name: key,
                value: this.tagDict[key]
            }));
        return nameValues
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    function decodeGa4ghReads(json) {
        var i, json, read, alignment, cigarDecoded, mate, jsonRecords = json.alignments, len = jsonRecords.length, alignments = [], genome = igv.browser.genome;
        for (i = 0; len > i; i++)
            json = jsonRecords[i],
            read = new igv.BamAlignment,
            read.readName = json.fragmentName,
            read.properPlacement = json.properPlacement,
            read.duplicateFragment = json.duplicateFragment,
            read.numberReads = json.numberReads,
            read.fragmentLength = json.fragmentLength,
            read.readNumber = json.readNumber,
            read.failedVendorQualityChecks = json.failedVendorQualityChecks,
            read.secondaryAlignment = json.secondaryAlignment,
            read.supplementaryAlignment = json.supplementaryAlignment,
            read.seq = json.alignedSequence,
            read.qual = json.alignedQuality,
            read.matePos = json.nextMatePosition,
            read.tagDict = json.info,
            read.flags = encodeFlags(json),
            alignment = json.alignment,
            alignment ? (read.mapped = !0,
            read.chr = json.alignment.position.referenceName,
            genome && (read.chr = genome.getChromosomeName(read.chr)),
            read.start = parseInt(json.alignment.position.position),
            read.strand = !json.alignment.position.reverseStrand,
            read.mq = json.alignment.mappingQuality,
            read.cigar = encodeCigar(json.alignment.cigar),
            cigarDecoded = translateCigar(json.alignment.cigar),
            read.lengthOnRef = cigarDecoded.lengthOnRef,
            blocks = makeBlocks(read, cigarDecoded.array),
            read.blocks = blocks.blocks,
            read.insertions = blocks.insertions) : read.mapped = !1,
            mate = json.nextMatePosition,
            mate && (read.mate = {
                chr: mate.referenceFrame,
                position: parseInt(mate.position),
                strand: !mate.reverseStrand
            }),
            alignments.push(read);
        return alignments
    }
    function encodeCigar(cigarArray) {
        return ""
    }
    function encodeFlags(json) {
        return 0
    }
    function translateCigar(cigar) {
        var cigarUnit, opLen, opLtr, lengthOnRef = 0, cigarArray = [];
        for (i = 0; i < cigar.length; i++)
            cigarUnit = cigar[i],
            opLtr = CigarOperationTable[cigarUnit.operation],
            opLen = parseInt(cigarUnit.operationLength),
            ("M" == opLtr || "EQ" == opLtr || "X" == opLtr || "D" == opLtr || "N" == opLtr || "=" == opLtr) && (lengthOnRef += opLen),
            cigarArray.push({
                len: opLen,
                ltr: opLtr
            });
        return {
            lengthOnRef: lengthOnRef,
            array: cigarArray
        }
    }
    function makeBlocks(record, cigarArray) {
        for (var insertions, blockSeq, blockQuals, blocks = [], seqOffset = 0, pos = record.start, len = cigarArray.length, i = 0; len > i; i++) {
            var c = cigarArray[i];
            switch (c.ltr) {
            case "H":
                break;
            case "P":
                break;
            case "S":
                seqOffset += c.len;
                break;
            case "N":
                pos += c.len;
                break;
            case "D":
                pos += c.len;
                break;
            case "I":
                blockSeq = "*" === record.seq ? "*" : record.seq.substr(seqOffset, c.len),
                blockQuals = "*" === record.qual ? "*" : record.qual.slice(seqOffset, c.len),
                void 0 === insertions && (insertions = []),
                insertions.push({
                    start: pos,
                    len: c.len,
                    seq: blockSeq,
                    qual: blockQuals,
                    insertion: !0
                }),
                seqOffset += c.len;
                break;
            case "M":
            case "EQ":
            case "=":
            case "X":
                blockSeq = "*" === record.seq ? "*" : record.seq.substr(seqOffset, c.len),
                blockQuals = "*" === record.qual ? "*" : record.qual.slice(seqOffset, c.len),
                blocks.push({
                    start: pos,
                    len: c.len,
                    seq: blockSeq,
                    qual: blockQuals
                }),
                seqOffset += c.len,
                pos += c.len;
                break;
            default:
                console.log("Error processing cigar element: " + c.len + c.ltr)
            }
        }
        return {
            blocks: blocks,
            insertions: insertions
        }
    }
    function populateChrNameMap(chrNameMap, datasetId) {
        var i;
        if ("461916304629" === datasetId || "337315832689" === datasetId) {
            for (i = 1; 23 > i; i++)
                chrNameMap["chr" + i] = i;
            chrNameMap.chrX = "X",
            chrNameMap.chrY = "Y",
            chrNameMap.chrM = "MT"
        }
    }
    var CigarOperationTable = {
        ALIGNMENT_MATCH: "M",
        INSERT: "I",
        DELETE: "D",
        SKIP: "N",
        CLIP_SOFT: "S",
        CLIP_HARD: "H",
        PAD: "P",
        SEQUENCE_MATCH: "=",
        SEQUENCE_MISMATCH: "X"
    };
    return igv.Ga4ghAlignmentReader = function(config) {
        this.config = config,
        this.url = config.url,
        this.readGroupSetIds = config.readGroupSetIds,
        this.authKey = config.authKey
    }
    ,
    igv.Ga4ghAlignmentReader.prototype.readFeatures = function(chr, bpStart, bpEnd, success, task) {
        function getChrNameMap(continuation) {
            self.chrNameMap ? continuation(self.chrNameMap) : self.readMetadata(function(json) {
                if (self.chrNameMap = {},
                igv.browser && json.readGroups && json.readGroups.length > 0) {
                    var referenceSetId = json.readGroups[0].referenceSetId;
                    if (console.log("No reference set specified"),
                    referenceSetId) {
                        var readURL = self.url + "/references/search";
                        igv.ga4ghSearch({
                            url: readURL,
                            body: {
                                referenceSetId: referenceSetId
                            },
                            decode: function(j) {
                                return j.references
                            },
                            success: function(references) {
                                references.forEach(function(ref) {
                                    var refName = ref.name
                                      , alias = igv.browser.genome.getChromosomeName(refName);
                                    self.chrNameMap[alias] = refName
                                }),
                                continuation(self.chrNameMap)
                            },
                            task: task
                        })
                    } else
                        populateChrNameMap(self.chrNameMap, self.config.datasetId),
                        continuation(self.chrNameMap)
                } else
                    continuation(self.chrNameMap)
            })
        }
        var self = this;
        getChrNameMap(function(chrNameMap) {
            var queryChr = chrNameMap.hasOwnProperty(chr) ? chrNameMap[chr] : chr
              , readURL = self.url + "/reads/search";
            igv.ga4ghSearch({
                url: readURL,
                body: {
                    readGroupSetIds: [self.readGroupSetIds],
                    referenceName: queryChr,
                    start: bpStart,
                    end: bpEnd,
                    pageSize: "10000"
                },
                decode: decodeGa4ghReads,
                success: success,
                task: task
            })
        })
    }
    ,
    igv.Ga4ghAlignmentReader.prototype.readMetadata = function(success, task) {
        igv.ga4ghGet({
            url: this.url,
            entity: "readgroupsets",
            entityId: this.readGroupSetIds,
            success: success,
            task: task
        })
    }
    ,
    igv.decodeGa4ghReadset = function(json) {
        var sequenceNames = []
          , fileData = json.fileData;
        return fileData.forEach(function(fileObject) {
            var refSequences = fileObject.refSequences;
            refSequences.forEach(function(refSequence) {
                sequenceNames.push(refSequence.name)
            })
        }),
        sequenceNames
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    function ga4ghHeaders() {
        var headers = {}
          , acToken = oauth.google.access_token;
        return headers["Cache-Control"] = "no-cache",
        acToken && (headers.Authorization = "Bearer " + acToken),
        headers
    }
    return igv.ga4ghGet = function(options) {
        var options, url = options.url + "/" + options.entity + "/" + options.entityId, acToken = oauth.google.access_token, apiKey = oauth.google.apiKey, paramSeparator = "?";
        apiKey && (url = url + paramSeparator + "key=" + apiKey,
        paramSeparator = "&"),
        acToken && (url = url + paramSeparator + "access_token=" + encodeURIComponent(acToken)),
        options = {
            success: options.success,
            task: options.task,
            headers: ga4ghHeaders()
        },
        igvxhr.loadJson(url, options)
    }
    ,
    igv.ga4ghSearch = function(options) {
        function loadChunk(pageToken) {
            pageToken ? body.pageToken = pageToken : void 0 != body.pageToken && delete body.pageToken;
            var sendData = JSON.stringify(body);
            igvxhr.loadJson(url, {
                sendData: sendData,
                task: task,
                contentType: "application/json",
                headers: ga4ghHeaders(),
                success: function(json) {
                    var nextPageToken, tmp;
                    json ? (tmp = decode ? decode(json) : json,
                    tmp && tmp.forEach(function(a) {
                        var keep = !0;
                        keep && results.push(a)
                    }),
                    nextPageToken = json.nextPageToken,
                    nextPageToken ? loadChunk(nextPageToken) : success(results)) : success(results)
                }
            })
        }
        var results = []
          , url = options.url
          , body = options.body
          , decode = options.decode
          , success = options.success
          , task = options.task
          , acToken = oauth.google.access_token
          , apiKey = oauth.google.apiKey
          , paramSeparator = "?";
        apiKey && (url = url + paramSeparator + "key=" + apiKey,
        paramSeparator = "&"),
        acToken && (url = url + paramSeparator + "access_token=" + encodeURIComponent(acToken)),
        loadChunk()
    }
    ,
    igv.ga4ghSearchReadGroupSets = function(options) {
        igv.ga4ghSearch({
            url: options.url + "/readgroupsets/search",
            body: {
                datasetIds: [options.datasetId],
                pageSize: "10000"
            },
            decode: function(json) {
                return json.readGroupSets
            },
            success: function(results) {
                options.success(results)
            }
        })
    }
    ,
    igv.ga4ghSearchVariantSets = function(options) {
        igv.ga4ghSearch({
            url: options.url + "/variantsets/search",
            body: {
                datasetIds: [options.datasetId],
                pageSize: "10000"
            },
            decode: function(json) {
                return json.variantSets
            },
            success: function(results) {
                options.success(results)
            }
        })
    }
    ,
    igv.ga4ghSearchCallSets = function(options) {
        options.datasetId ? igv.ga4ghSearchVariantSets({
            url: options.url,
            datasetId: options.datasetId,
            success: function(results) {
                var variantSetIds = [];
                results.forEach(function(vs) {
                    variantSetIds.push(vs.id)
                }),
                options.datasetId = void 0,
                options.variantSetIds = variantSetIds,
                igv.ga4ghSearchCallSets(options)
            }
        }) : igv.ga4ghSearch({
            url: options.url + "/callsets/search",
            body: {
                variantSetIds: options.variantSetIds,
                pageSize: "10000"
            },
            decode: function(json) {
                return json.callSets && json.callSets.forEach(function(cs) {
                    cs.variantSetIds = options.variantSetIds
                }),
                json.callSets
            },
            success: function(results) {
                options.success(results)
            }
        })
    }
    ,
    igv.ga4ghSearchReadAndCallSets = function(options) {
        igv.ga4ghSearchReadGroupSets({
            url: options.url,
            datasetId: options.datasetId,
            success: function(readGroupSets) {
                igv.ga4ghSearchCallSets({
                    url: options.url,
                    datasetId: options.datasetId,
                    success: function(callSets) {
                        var csHash = {};
                        callSets.forEach(function(cs) {
                            csHash[cs.name] = cs
                        });
                        var mergedResults = [];
                        readGroupSets.forEach(function(rg) {
                            var m = {
                                readGroupSetId: rg.id,
                                name: rg.name,
                                datasetId: options.datasetId
                            }
                              , cs = csHash[rg.name];
                            cs && (m.callSetId = cs.id,
                            m.variantSetIds = cs.variantSetIds),
                            mergedResults.push(m)
                        }),
                        options.success(mergedResults)
                    }
                })
            }
        })
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    return igv.Ga4ghVariantReader = function(config) {
        this.config = config,
        this.url = config.url,
        this.variantSetId = config.variantSetId,
        this.callSetIds = config.callSetIds
    }
    ,
    igv.Ga4ghVariantReader.prototype.readFeatures = function(chr, bpStart, bpEnd, success, task) {
        function getChrNameMap(continuation) {
            myself.chrNameMap ? continuation(myself.chrNameMap) : myself.readMetadata(function(json) {
                myself.metadata = json.metadata,
                myself.chrNameMap = {},
                json.referenceBounds && igv.browser && json.referenceBounds.forEach(function(rb) {
                    var refName = rb.referenceName
                      , alias = igv.browser.genome.getChromosomeName(refName);
                    myself.chrNameMap[alias] = refName
                }),
                continuation(myself.chrNameMap)
            })
        }
        var myself = this;
        getChrNameMap(function(chrNameMap) {
            var queryChr = chrNameMap.hasOwnProperty(chr) ? chrNameMap[chr] : chr
              , readURL = myself.url + "/variants/search";
            igv.ga4ghSearch({
                url: readURL,
                body: {
                    variantSetIds: [myself.variantSetId],
                    callSetIds: myself.callSetIds,
                    referenceName: queryChr,
                    start: bpStart.toString(),
                    end: bpEnd.toString(),
                    pageSize: "10000"
                },
                decode: function(json) {
                    var variants = [];
                    return json.variants.forEach(function(json) {
                        if (json.calls && 1 === json.calls.length) {
                            var variant, allele1 = json.calls[0].genotype[0], allele2 = json.calls[0].genotype[1];
                            if (0 === allele1 && 0 === allele2)
                                return;
                            allele1 === allele2 ? gt = "HOMVAR" : gt = "HETVAR",
                            variant = igv.createGAVariant(json),
                            variant.genotype = gt,
                            variants.push(variant)
                        } else
                            variants.push(igv.createGAVariant(json))
                    }),
                    variants
                },
                success: success,
                task: task
            })
        })
    }
    ,
    igv.Ga4ghVariantReader.prototype.readMetadata = function(success, task) {
        igv.ga4ghGet({
            url: this.url,
            entity: "variantsets",
            entityId: this.variantSetId,
            success: success,
            task: task
        })
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    return igv.translateGoogleCloudURL = function(gsUrl) {
        var i = gsUrl.indexOf("/", 5);
        if (0 > i)
            return console.log("Invalid gs url: " + gsUrl),
            gsUrl;
        var bucket = gsUrl.substring(5, i)
          , object = encodeURIComponent(gsUrl.substring(i + 1));
        return "https://www.googleapis.com/storage/v1/b/" + bucket + "/o/" + object + "?alt=media"
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    function loadCytobands(cytobandUrl, continuation) {
        igvxhr.loadString(cytobandUrl, {
            success: function(data) {
                for (var lastChr, bands = [], n = 0, c = 1, lines = data.splitLines(), len = lines.length, cytobands = {}, i = 0; len > i; i++) {
                    var tokens = lines[i].split("	")
                      , chr = tokens[0];
                    if (lastChr || (lastChr = chr),
                    chr != lastChr && (cytobands[lastChr] = bands,
                    bands = [],
                    lastChr = chr,
                    n = 0,
                    c++),
                    5 == tokens.length) {
                        var chr = tokens[0]
                          , start = parseInt(tokens[1])
                          , end = parseInt(tokens[2])
                          , name = tokens[3]
                          , stain = tokens[4];
                        bands[n++] = new igv.Cytoband(start,end,name,stain)
                    }
                }
                continuation(cytobands)
            }
        })
    }
    function loadAliases(aliasURL, continuation) {
        igvxhr.loadString(aliasURL, {
            success: function(data) {
                var lines = data.splitLines()
                  , aliases = [];
                lines.forEach(function(line) {
                    !line.startsWith("#") & line.length > 0 && aliases.push(line.split("	"))
                }),
                continuation(aliases)
            }
        })
    }
    return igv.Genome = function(sequence, chromosomeNames, chromosomes, ideograms, aliases) {
        this.sequence = sequence,
        this.chromosomeNames = chromosomeNames,
        this.chromosomes = chromosomes,
        this.ideograms = ideograms;
        var chrAliasTable = {};
        chromosomeNames.forEach(function(name) {
            var alias = name.startsWith("chr") ? name.substring(3) : "chr" + name;
            chrAliasTable[alias] = name,
            "chrM" === name && (chrAliasTable.MT = "chrM"),
            "MT" === name && (chrAliasTable.chrmM = "MT")
        }),
        aliases && aliases.forEach(function(array) {
            var defName;
            for (i = 0; i < array.length; i++)
                if (chromosomes[array[i]]) {
                    defName = array[i];
                    break
                }
            defName && array.forEach(function(alias) {
                alias !== defName && (chrAliasTable[alias] = defName)
            })
        }),
        this.chrAliasTable = chrAliasTable
    }
    ,
    igv.Genome.prototype.getChromosomeName = function(str) {
        var chr = this.chrAliasTable[str];
        return chr ? chr : str
    }
    ,
    igv.Genome.prototype.getChromosome = function(chr) {
        return chr = this.getChromosomeName(chr),
        this.chromosomes[chr]
    }
    ,
    igv.Genome.prototype.getCytobands = function(chr) {
        return this.ideograms ? this.ideograms[chr] : null 
    }
    ,
    igv.Genome.prototype.getChromosomes = function() {
        return this.chromosomes
    }
    ,
    igv.Chromosome = function(name, order, bpLength) {
        this.name = name,
        this.order = order,
        this.bpLength = bpLength
    }
    ,
    igv.Cytoband = function(start, end, name, typestain) {
        this.start = start,
        this.end = end,
        this.name = name,
        this.stain = 0,
        "acen" == typestain ? this.type = "c" : (this.type = typestain.charAt(1),
        "p" == this.type && (this.stain = parseInt(typestain.substring(4))))
    }
    ,
    igv.GenomicInterval = function(chr, start, end, features) {
        this.chr = chr,
        this.start = start,
        this.end = end,
        this.features = features
    }
    ,
    igv.GenomicInterval.prototype.contains = function(chr, start, end) {
        return this.chr == chr && this.start <= start && this.end >= end
    }
    ,
    igv.GenomicInterval.prototype.containsRange = function(range) {
        return this.chr === range.chr && this.start <= range.start && this.end >= range.end
    }
    ,
    igv.loadGenome = function(reference, continuation) {
        function checkReady() {
            var isReady = !(void 0 !== cytobandUrl && void 0 === cytobands || void 0 !== aliasURL && void 0 === aliases);
            isReady && continuation(new igv.Genome(sequence,chrNames,chromosomes,cytobands,aliases))
        }
        var cytobands, aliases, chrNames, fastaUrl = reference.fastaURL, cytobandUrl = reference.cytobandURL, aliasURL = reference.aliasURL, chromosomes = {};
        sequence = new igv.FastaSequence(fastaUrl),
        sequence.loadIndex(function(fastaIndex) {
            var order = 0;
            chrNames = sequence.chromosomeNames,
            chrNames.forEach(function(chrName) {
                var bpLength = fastaIndex[chrName].size;
                chromosomes[chrName] = new igv.Chromosome(chrName,order++,bpLength)
            }),
            cytobandUrl && loadCytobands(cytobandUrl, function(result) {
                cytobands = result,
                checkReady()
            }),
            aliasURL && loadAliases(aliasURL, function(result) {
                aliases = result,
                checkReady()
            }),
            checkReady()
        })
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    function selectedFeature(feature, source) {
        console.log(feature + " " + source);
        var type = "gtex" === source ? "snp" : "gene";
        this.selection = new GtexSelection("gene" == type ? {
            gene: feature
        } : {
            snp: feature
        }),
        igv.browser.update()
    }
    igv.EqtlTrack = function(config) {
        var url = config.url
          , label = config.name;
        this.config = config,
        this.url = url,
        this.name = label,
        this.pValueField = config.pValueField || "pValue",
        this.geneField = config.geneField || "geneName",
        this.minLogP = config.minLogP || 3.5,
        this.maxLogP = config.maxLogP || 25,
        this.background = config.background,
        this.divider = config.divider || "rgb(225,225,225)",
        this.dotSize = config.dotSize || 2,
        this.height = config.height || 100,
        this.autoHeight = !1,
        this.disableButtons = config.disableButtons,
        this.featureSource = new igv.FeatureSource(config),
        this.onsearch = function(feature, source) {
            selectedFeature.call(this, feature, source)
        }
    }
    ,
    igv.EqtlTrack.prototype.paintAxis = function(ctx, pixelWidth, pixelHeight) {
        var track = this
          , yScale = (track.maxLogP - track.minLogP) / pixelHeight
          , font = {
            font: "normal 10px Arial",
            textAlign: "right",
            strokeStyle: "black"
        };
        igv.graphics.fillRect(ctx, 0, 0, pixelWidth, pixelHeight, {
            fillStyle: "rgb(255, 255, 255)"
        });
        for (var p = 4; p <= track.maxLogP; p += 2) {
            var yp = pixelHeight - Math.round((p - track.minLogP) / yScale);
            igv.graphics.strokeLine(ctx, 45, yp - 2, 50, yp - 2, font),
            igv.graphics.fillText(ctx, p, 44, yp + 2, font)
        }
        font.textAlign = "center",
        igv.graphics.fillText(ctx, "-log10(pvalue)", pixelWidth / 2, pixelHeight / 2, font, {
            rotate: {
                angle: -90
            }
        })
    }
    ,
    igv.EqtlTrack.prototype.getFeatures = function(chr, bpStart, bpEnd, continuation, task) {
        this.featureSource.getFeatures(chr, bpStart, bpEnd, continuation, task)
    }
    ,
    igv.EqtlTrack.prototype.draw = function(options) {
        function drawEqtls(drawSelected) {
            var eqtl, i, px, py, color, isSelected, snp, geneName, selection, radius = drawSelected ? 2 * track.dotSize : track.dotSize;
            for (igv.graphics.setProperties(ctx, {
                fillStyle: "rgb(180, 180, 180)",
                strokeStyle: "rgb(180, 180, 180)"
            }),
            i = 0; len > i; i++)
                if (eqtl = featureList[i],
                snp = eqtl.snp.toUpperCase(),
                geneName = eqtl[track.geneField].toUpperCase(),
                selection = igv.browser.selection,
                isSelected = selection && (selection.snp === snp || selection.gene === geneName),
                (!drawSelected || isSelected) && (selection && selection.snp === snp && selection.addGene(geneName),
                drawSelected && selection && (color = selection.colorForGene(geneName)),
                !(drawSelected && void 0 === color || (px = Math.round(eqtl.position - bpStart + .5) / bpPerPixel,
                0 > px)))) {
                    if (px > pixelWidth)
                        break;
                    var mLogP = -Math.log(eqtl[track.pValueField]) / Math.LN10;
                    mLogP < track.minLogP || (py = Math.max(0 + radius, pixelHeight - Math.round((mLogP - track.minLogP) / yScale)),
                    eqtl.px = px,
                    eqtl.py = py,
                    color && igv.graphics.setProperties(ctx, {
                        fillStyle: color,
                        strokeStyle: "black"
                    }),
                    igv.graphics.fillCircle(ctx, px, py, radius),
                    igv.graphics.strokeCircle(ctx, px, py, radius))
                }
        }
        var track = this
          , featureList = options.features
          , ctx = options.context
          , bpPerPixel = options.bpPerPixel
          , bpStart = options.bpStart
          , pixelWidth = options.pixelWidth
          , pixelHeight = options.pixelHeight
          , yScale = (track.maxLogP - track.minLogP) / pixelHeight;
        if (this.background && igv.graphics.fillRect(ctx, 0, 0, pixelWidth, pixelHeight, {
            fillStyle: this.background
        }),
        igv.graphics.strokeLine(ctx, 0, pixelHeight - 1, pixelWidth, pixelHeight - 1, {
            strokeStyle: this.divider
        }),
        ctx) {
            var len = featureList.length;
            ctx.save(),
            drawEqtls(!1),
            drawEqtls(!0),
            ctx.restore()
        }
    }
    ,
    igv.EqtlTrack.prototype.popupData = function(genomicLocation, xOffset, yOffset) {
        if (this.featureSource.featureCache) {
            var chr = igv.browser.referenceFrame.chr
              , tolerance = 2 * this.dotSize * igv.browser.referenceFrame.bpPerPixel
              , featureList = this.featureSource.featureCache.queryFeatures(chr, genomicLocation - tolerance, genomicLocation + tolerance)
              , dotSize = this.dotSize
              , tissue = this.name;
            if (featureList && featureList.length > 0) {
                var popupData = [];
                return featureList.forEach(function(feature) {
                    feature.end >= genomicLocation - tolerance && feature.start <= genomicLocation + tolerance && feature.py - yOffset < 2 * dotSize && (popupData.length > 0 && popupData.push("<hr>"),
                    popupData.push({
                        name: "snp id",
                        value: feature.snp
                    }, {
                        name: "gene id",
                        value: feature.geneId
                    }, {
                        name: "gene name",
                        value: feature.geneName
                    }, {
                        name: "p value",
                        value: feature.pValue
                    }, {
                        name: "tissue",
                        value: tissue
                    }))
                }),
                popupData
            }
        }
    }
    ,
    GtexSelection = function(selection) {
        this.geneColors = {},
        this.gene = null ,
        this.snp = null ,
        this.genesCount = 0,
        selection.gene && (this.gene = selection.gene.toUpperCase(),
        this.geneColors[this.gene] = brewer[this.genesCount++]),
        selection.snp && (this.snp = selection.snp.toUpperCase())
    }
    ,
    GtexSelection.prototype.addGene = function(geneName) {
        this.geneColors[geneName.toUpperCase()] || (this.geneColors[geneName.toUpperCase()] = brewer[this.genesCount++])
    }
    ,
    GtexSelection.prototype.colorForGene = function(geneName) {
        return this.geneColors[geneName.toUpperCase()]
    }
    ;
    var brewer = new Array;
    return brewer.push("rgb(228,26,28)"),
    brewer.push("rgb(55,126,184)"),
    brewer.push("rgb(77,175,74)"),
    brewer.push("rgb(166,86,40)"),
    brewer.push("rgb(152,78,163)"),
    brewer.push("rgb(255,127,0)"),
    brewer.push("rgb(247,129,191)"),
    brewer.push("rgb(153,153,153)"),
    brewer.push("rgb(255,255,51)"),
    brewer.push("rgb(102, 194, 165"),
    brewer.push("rgb(252, 141, 98"),
    brewer.push("rgb(141, 160, 203"),
    brewer.push("rgb(231, 138, 195"),
    brewer.push("rgb(166, 216, 84"),
    brewer.push("rgb(255, 217, 47"),
    brewer.push("rgb(229, 196, 148"),
    brewer.push("rgb(179, 179, 179"),
    brewer.push("rgb( 141, 211, 199"),
    brewer.push("rgb(255, 255, 179"),
    brewer.push("rgb(190, 186, 218"),
    brewer.push("rgb(251, 128, 114"),
    brewer.push("rgb(128, 177, 211"),
    brewer.push("rgb(253, 180, 98"),
    brewer.push("rgb(179, 222, 105"),
    brewer.push("rgb(252, 205, 229"),
    brewer.push("rgb(217, 217, 217"),
    brewer.push("rgb(188, 128, 189"),
    brewer.push("rgb(204, 235, 197"),
    brewer.push("rgb(255, 237, 111"),
    igv
}(igv || {})
  , igv = function(igv) {
    igv.GtexSelection = function(selection) {
        this.geneColors = {},
        this.gene = null ,
        this.snp = null ,
        this.genesCount = 0,
        selection.gene && (this.gene = selection.gene.toUpperCase(),
        this.geneColors[this.gene] = brewer[this.genesCount++]),
        selection.snp && (this.snp = selection.snp.toUpperCase())
    }
    ,
    igv.GtexSelection.prototype.addGene = function(geneName) {
        this.geneColors[geneName.toUpperCase()] || (this.geneColors[geneName.toUpperCase()] = brewer[this.genesCount++])
    }
    ,
    igv.GtexSelection.prototype.colorForGene = function(geneName) {
        return this.geneColors[geneName.toUpperCase()]
    }
    ;
    var brewer = new Array;
    return brewer.push("rgb(228,26,28)"),
    brewer.push("rgb(55,126,184)"),
    brewer.push("rgb(77,175,74)"),
    brewer.push("rgb(166,86,40)"),
    brewer.push("rgb(152,78,163)"),
    brewer.push("rgb(255,127,0)"),
    brewer.push("rgb(247,129,191)"),
    brewer.push("rgb(153,153,153)"),
    brewer.push("rgb(255,255,51)"),
    brewer.push("rgb(102, 194, 165"),
    brewer.push("rgb(252, 141, 98"),
    brewer.push("rgb(141, 160, 203"),
    brewer.push("rgb(231, 138, 195"),
    brewer.push("rgb(166, 216, 84"),
    brewer.push("rgb(255, 217, 47"),
    brewer.push("rgb(229, 196, 148"),
    brewer.push("rgb(179, 179, 179"),
    brewer.push("rgb( 141, 211, 199"),
    brewer.push("rgb(255, 255, 179"),
    brewer.push("rgb(190, 186, 218"),
    brewer.push("rgb(251, 128, 114"),
    brewer.push("rgb(128, 177, 211"),
    brewer.push("rgb(253, 180, 98"),
    brewer.push("rgb(179, 222, 105"),
    brewer.push("rgb(252, 205, 229"),
    brewer.push("rgb(217, 217, 217"),
    brewer.push("rgb(188, 128, 189"),
    brewer.push("rgb(204, 235, 197"),
    brewer.push("rgb(255, 237, 111"),
    igv
}(igv || {})
  , igv = function(igv) {
    igv.GtexFileReader = function(config) {
        this.file = config.url,
        this.codec = this.file.endsWith(".bin") ? createEqtlBinary : createEQTL,
        this.cache = {},
        this.binary = this.file.endsWith(".bin"),
        this.compressed = this.file.endsWith(".compressed.bin")
    }
    ,
    igv.GtexFileReader.prototype.readFeatures = function(continuation, task, genomicRange) {
        function loadWithIndex(index, chr, continuation) {
            var chrIdx = index[chr];
            if (chrIdx) {
                var blocks = chrIdx.blocks
                  , lastBlock = blocks[blocks.length - 1]
                  , endPos = lastBlock.startPos + lastBlock.size
                  , len = endPos - blocks[0].startPos
                  , range = {
                    start: blocks[0].startPos,
                    size: len
                };
                igvxhr.loadArrayBuffer(file, {
                    task: task,
                    range: range,
                    success: function(arrayBuffer) {
                        if (arrayBuffer) {
                            var data = new DataView(arrayBuffer)
                              , parser = new igv.BinaryParser(data)
                              , featureList = [];
                            for (parser.offset; parser.hasNext(); ) {
                                var feature = createEqtlBinary(parser);
                                featureList.push(feature)
                            }
                            continuation(featureList)
                        } else
                            continuation(null )
                    }
                })
            } else
                continuation([]);
            var createEqtlBinary = function(parser) {
                var snp = parser.getString()
                  , chr = parser.getString()
                  , position = parser.getInt()
                  , geneId = parser.getString()
                  , geneName = parser.getString()
                  , pValue = parser.getFloat();
                return new Eqtl(snp,chr,position,geneId,geneName,pValue)
            }
        }
        function Eqtl(snp, chr, position, geneId, geneName, pValue) {
            this.snp = snp,
            this.chr = chr,
            this.position = position,
            this.start = position,
            this.end = position + 1,
            this.geneId = geneId,
            this.geneName = geneName,
            this.pValue = pValue
        }
        function loadIndex(url, continuation) {
            var genome = igv.browser ? igv.browser.genome : null ;
            igvxhr.loadArrayBuffer(url, {
                range: {
                    start: 0,
                    size: 200
                },
                success: function(arrayBuffer) {
                    var data = new DataView(arrayBuffer)
                      , parser = new igv.BinaryParser(data)
                      , indexPosition = (parser.getInt(),
                    parser.getInt(),
                    parser.getLong())
                      , indexSize = parser.getInt();
                    igvxhr.loadArrayBuffer(url, {
                        range: {
                            start: indexPosition,
                            size: indexSize
                        },
                        success: function(arrayBuffer2) {
                            for (var data2 = new DataView(arrayBuffer2), index = null , parser = new igv.BinaryParser(data2), index = {}, nChrs = parser.getInt(); nChrs-- > 0; ) {
                                var chr = parser.getString();
                                genome && (chr = genome.getChromosomeName(chr));
                                var position = parser.getLong()
                                  , size = parser.getInt()
                                  , blocks = new Array;
                                blocks.push(new Block(position,size)),
                                index[chr] = new ChrIdx(chr,blocks)
                            }
                            continuation(index)
                        }
                    })
                }
            })
        }
        var chr = genomicRange.chr
          , self = this
          , file = this.file
          , index = self.index;
        index ? loadWithIndex(index, chr, continuation) : loadIndex(self.file, function(index) {
            self.index = index,
            loadWithIndex(index, chr, continuation)
        }),
        Eqtl.prototype.description = function() {
            return "<b>snp</b>:&nbsp" + this.snp + "<br/><b>location</b>:&nbsp" + this.chr + ":" + formatNumber(this.position + 1) + "<br/><b>gene</b>:&nbsp" + this.geneName + "<br/><b>pValue</b>:&nbsp" + this.pValue + "<br/><b>mLogP</b>:&nbsp" + this.mLogP
        }
        ,
        Block = function(startPos, size) {
            this.startPos = startPos,
            this.size = size
        }
        ,
        ChrIdx = function(chr, blocks) {
            this.chr = chr,
            this.blocks = blocks
        }
    }
    ;
    var createEQTL = function(tokens) {
        var snp = tokens[0]
          , chr = tokens[1]
          , position = parseInt(tokens[2]) - 1
          , geneId = tokens[3]
          , geneName = tokens[4]
          , genePosition = tokens[5]
          , fStat = parseFloat(tokens[6])
          , pValue = parseFloat(tokens[7]);
        return new Eqtl(snp,chr,position,geneId,geneName,genePosition,fStat,pValue)
    }
      , createEqtlBinary = function(parser) {
        var snp = parser.getString()
          , chr = parser.getString()
          , position = parser.getInt()
          , geneId = parser.getString()
          , geneName = parser.getString()
          , pValue = parser.getFloat();
        return new Eqtl(snp,chr,position,geneId,geneName,pValue)
    }
    ;
    return igv
}(igv || {})
  , igv = function(igv) {
    return igv.GtexReader = function(config) {
        this.url = config.url,
        this.tissueName = config.tissueName,
        this.indexed = !0
    }
    ,
    igv.GtexReader.prototype.readFeatures = function(success, task, range) {
        var queryChr = range.chr.startsWith("chr") ? range.chr.substr(3) : range.chr
          , queryStart = range.start
          , queryEnd = range.end
          , queryURL = this.url + "?chromosome=" + queryChr + "&start=" + queryStart + "&end=" + queryEnd + "&tissueName=" + this.tissueName;
        igvxhr.loadJson(queryURL, {
            task: task,
            success: function(json) {
                json && json.singleTissueEqtl ? (json.singleTissueEqtl.forEach(function(eqtl) {
                    eqtl.chr = "chr" + eqtl.chromosome,
                    eqtl.position = eqtl.start,
                    eqtl.start = eqtl.start - 1,
                    eqtl.snp = eqtl.snpId,
                    eqtl.geneName = eqtl.geneSymbol,
                    eqtl.geneId = eqtl.gencodeId,
                    eqtl.end = eqtl.start
                }),
                success(json.singleTissueEqtl)) : success(null )
            }
        })
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    return igv.ImmVarReader = function(config) {
        this.url = config.url,
        this.cellConditionId = config.cellConditionId,
        this.valueThreshold = config.valueThreshold ? config.valueThreshold : .05
    }
    ,
    igv.ImmVarReader.prototype.readFeatures = function(success, task, range) {
        var queryChr = range.chr
          , queryStart = range.start
          , queryEnd = range.end
          , queryURL = this.url + "?chromosome=" + queryChr + "&start=" + queryStart + "&end=" + queryEnd + "&cell_condition_id=" + this.cellConditionId;
        igvxhr.loadJson(queryURL, {
            task: task,
            success: function(json) {
                json ? (json.eqtls.forEach(function(eqtl) {
                    eqtl.chr = eqtl.chromosome,
                    eqtl.start = eqtl.position,
                    eqtl.end = eqtl.position + 1
                }),
                success(json.eqtls)) : success(null )
            }
        })
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    const DEFAULT_POPOVER_WINDOW = 1e8;
    return igv.GWASTrack = function(config) {
        this.config = config,
        this.url = config.url,
        this.name = config.name,
        this.trait = config.trait,
        this.height = config.height || 100,
        this.minLogP = config.minLogP || 0,
        this.maxLogP = config.maxLogP || 15,
        this.background = config.background,
        this.divider = config.divider || "rgb(225,225,225)",
        this.dotSize = config.dotSize || 4,
        this.popoverWindow = void 0 === config.popoverWindow ? DEFAULT_POPOVER_WINDOW : config.popoverWindow,
        this.description = config.description,
        this.proxy = config.proxy,
        this.portalURL = config.portalURL ? config.portalURL : window.location.origin,
        this.variantURL = config.variantURL || "http://www.type2diabetesgenetics.org/variant/variantInfo/",
        this.traitURL = config.traitURL || "http://www.type2diabetesgenetics.org/trait/traitInfo/";
        var cs = config.colorScale || {
            thresholds: [5e-8, 5e-4, .5],
            colors: ["rgb(255,50,50)", "rgb(251,100,100)", "rgb(251,170,170)", "rgb(227,238,249)"]
        };
        this.pvalue = config.pvalue ? config.pvalue : "PVALUE",
        this.colorScale = new igv.BinnedColorScale(cs),
        config.format && "gtexGWAS" === config.format ? this.featureSource = new igv.FeatureSource(config) : this.featureSource = new igv.T2DVariantSource(config)
    }
    ,
    igv.GWASTrack.prototype.getFeatures = function(chr, bpStart, bpEnd, continuation, task) {
        this.featureSource.getFeatures(chr, bpStart, bpEnd, continuation, task)
    }
    ,
    igv.GWASTrack.prototype.draw = function(options) {
        var track = this
          , featureList = options.features
          , ctx = options.context
          , bpPerPixel = options.bpPerPixel
          , bpStart = options.bpStart
          , pixelWidth = options.pixelWidth
          , pixelHeight = options.pixelHeight
          , bpEnd = bpStart + pixelWidth * bpPerPixel + 1
          , yScale = (track.maxLogP - track.minLogP) / pixelHeight
          , enablePopover = DEFAULT_POPOVER_WINDOW > bpEnd - bpStart;
        enablePopover ? this.po = [] : this.po = void 0,
        this.background && igv.graphics.fillRect(ctx, 0, 0, pixelWidth, pixelHeight, {
            fillStyle: this.background
        }),
        igv.graphics.strokeLine(ctx, 0, pixelHeight - 1, pixelWidth, pixelHeight - 1, {
            strokeStyle: this.divider
        });
        var variant, pos, len, xScale, px, py, color, pvalue, val;
        if (featureList) {
            len = featureList.length;
            for (var i = 0; len > i; i++)
                if (variant = featureList[i],
                pos = variant.start,
                !(bpStart > pos)) {
                    if (pos > bpEnd)
                        break;
                    pvalue = variant.pvalue || variant[track.pvalue],
                    pvalue && (color = track.colorScale.getColor(pvalue),
                    val = -Math.log(pvalue) / 2.302585092994046,
                    xScale = bpPerPixel,
                    px = Math.round((pos - bpStart) / xScale),
                    py = Math.max(track.dotSize, pixelHeight - Math.round((val - track.minLogP) / yScale)),
                    color && igv.graphics.setProperties(ctx, {
                        fillStyle: color,
                        strokeStyle: "black"
                    }),
                    igv.graphics.fillCircle(ctx, px, py, track.dotSize),
                    enablePopover && track.po.push({
                        x: px,
                        y: py,
                        feature: variant
                    }))
                }
        }
    }
    ,
    igv.GWASTrack.prototype.paintAxis = function(ctx, pixelWidth, pixelHeight) {
        var track = this
          , yScale = (track.maxLogP - track.minLogP) / pixelHeight
          , font = {
            font: "normal 10px Arial",
            textAlign: "right",
            strokeStyle: "black"
        };
        igv.graphics.fillRect(ctx, 0, 0, pixelWidth, pixelHeight, {
            fillStyle: "rgb(255, 255, 255)"
        });
        for (var p = 2; p < track.maxLogP; p += 2) {
            var yp = pixelHeight - Math.round((p - track.minLogP) / yScale);
            igv.graphics.strokeLine(ctx, 45, yp - 2, 50, yp - 2, font),
            igv.graphics.fillText(ctx, p, 44, yp + 2, font)
        }
        font.textAlign = "center",
        igv.graphics.fillText(ctx, "-log10(pvalue)", pixelWidth / 2, pixelHeight / 2, font, {
            rotate: {
                angle: -90
            }
        })
    }
    ,
    igv.GWASTrack.prototype.popupData = function(genomicLocation, xOffset, yOffset) {
        var i, len, p, dbSnp, url, chr, pos, pvalue, data = [];
        if (this.po)
            for (i = 0,
            len = this.po.length; len > i; i++)
                p = this.po[i],
                Math.abs(xOffset - p.x) < this.dotSize && Math.abs(yOffset - p.y) <= this.dotSize && (chr = p.feature.CHROM || p.feature.chr,
                pos = p.feature.POS || p.feature.start,
                pvalue = p.feature[this.pvalue] || p.feature.pvalue,
                dbSnp = p.feature.DBSNP_ID,
                dbSnp && (url = this.variantURL.startsWith("http") ? this.variantURL : this.portalURL + "/" + this.variantURL,
                data.push("<a target='_blank' href='" + url + (url.endsWith("/") ? "" : "/") + dbSnp + "' >" + dbSnp + "</a>")),
                data.push(chr + ":" + pos.toString()),
                data.push({
                    name: "p-value",
                    value: pvalue
                }),
                p.feature.ZSCORE && data.push({
                    name: "z-score",
                    value: p.feature.ZSCORE
                }),
                dbSnp && (url = this.traitURL.startsWith("http") ? this.traitURL : this.portalURL + "/" + this.traitURL,
                data.push("<a target='_blank' href='" + url + (url.endsWith("/") ? "" : "/") + dbSnp + "'>see all available statistics for this variant</a>")),
                len - 1 > i && data.push("<p/>"));
        else
            data.push("Popover not available at this resolution.");
        return data
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    function jsonToVariantsV2(json, config) {
        return variants = [],
        json.variants.forEach(function(record) {
            var variant = {};
            record.forEach(function(object) {
                for (var property in object)
                    object.hasOwnProperty(property) && ("POS" === property && (variant.start = object[property] - 1),
                    variant[property] = object[property])
            }),
            variant.pvalue = variant[config.pvalue][config.dataset][config.trait],
            variant[config.pvalue] = void 0,
            variants.push(variant)
        }),
        variants
    }
    function queryJsonV2(queryChr, queryStart, queryEnd, config) {
        var phenotype = config.trait
          , pvalue = config.pvalue
          , dataset = config.dataset
          , properties = {
            cproperty: ["VAR_ID", "DBSNP_ID", "CHROM", "POS"],
            orderBy: ["CHROM"],
            dproperty: {},
            pproperty: JSON.parse('{"' + pvalue + '": {"' + dataset + '": ["' + phenotype + '"]}}')
        }
          , filters = [{
            dataset_id: "x",
            phenotype: "x",
            operand: "CHROM",
            operator: "EQ",
            value: queryChr,
            operand_type: "STRING"
        }, {
            dataset_id: "x",
            phenotype: "x",
            operand: "POS",
            operator: "GTE",
            value: queryStart,
            operand_type: "INTEGER"
        }, {
            dataset_id: "x",
            phenotype: "x",
            operand: "POS",
            operator: "LTE",
            value: queryEnd,
            operand_type: "INTEGER"
        }, {
            dataset_id: dataset,
            phenotype: phenotype,
            operand: pvalue,
            operator: "LT",
            value: config.valueThreshold,
            operand_type: "FLOAT"
        }]
          , data = {
            passback: "x",
            entity: "variant",
            properties: properties,
            filters: filters
        };
        return JSON.stringify(data)
    }
    function queryJsonV1(queryChr, queryStart, queryEnd, config) {
        var type = config.url.contains("variant") ? VARIANT : TRAIT
          , pvalue = config.pvalue ? config.pvalue : "PVALUE"
          , filters = [{
            operand: "CHROM",
            operator: "EQ",
            value: queryChr,
            filter_type: "STRING"
        }, {
            operand: "POS",
            operator: "GT",
            value: queryStart,
            filter_type: "FLOAT"
        }, {
            operand: "POS",
            operator: "LT",
            value: queryEnd,
            filter_type: "FLOAT"
        }, {
            operand: pvalue,
            operator: "LTE",
            value: config.valueThreshold,
            filter_type: "FLOAT"
        }]
          , columns = type === TRAIT ? ["CHROM", "POS", "DBSNP_ID", "PVALUE", "ZSCORE"] : ["CHROM", "POS", pvalue, "DBSNP_ID"]
          , data = {
            user_group: "ui",
            filters: filters,
            columns: columns
        };
        return type === TRAIT && (data.trait = config.trait),
        config.proxy ? "url=" + config.url + "&data=" + JSON.stringify(data) : JSON.stringify(data)
    }
    function jsonToVariantsV1(json, config) {
        return json.variants.forEach(function(variant) {
            variant.chr = variant.CHROM,
            variant.start = variant.POS - 1
        }),
        json.variants
    }
    const VARIANT = "VARIANT"
      , TRAIT = "TRAIT";
    igv.T2DVariantSource = function(config) {
        this.config = config,
        this.url = config.url,
        this.trait = config.trait,
        this.dataset = config.dataset,
        this.pvalue = config.pvalue,
        void 0 === config.valueThreshold && (config.valueThreshold = .05),
        void 0 === config.dataset ? (this.queryJson = config.queryJson || queryJsonV1,
        this.jsonToVariants = config.jsonToVariants || jsonToVariantsV1) : (this.queryJson = config.queryJson || queryJsonV2,
        this.jsonToVariants = config.jsonToVariants || jsonToVariantsV2)
    }
    ,
    igv.T2DVariantSource.prototype.getFeatures = function(chr, bpStart, bpEnd, success, task) {
        var self = this;
        if (this.cache && this.cache.chr === chr && this.cache.end > bpEnd && this.cache.start < bpStart)
            success(this.cache.featuresBetween(bpStart, bpEnd));
        else {
            var window = Math.max(bpEnd - bpStart, 1e7) / 2
              , center = (bpEnd + bpStart) / 2
              , queryChr = chr.startsWith("chr") ? chr.substring(3) : chr
              , queryStart = Math.max(0, center - window)
              , queryEnd = center + window
              , queryURL = this.config.proxy ? this.config.proxy : this.url
              , body = this.queryJson(queryChr, queryStart, queryEnd, self.config);
            igvxhr.loadJson(queryURL, {
                sendData: body,
                task: task,
                success: function(json) {
                    var variants;
                    json ? json.error_code ? (alert("Error querying trait " + self.trait + "  (error_code=" + json.error_code + ")"),
                    success(null )) : (variants = self.jsonToVariants(json, self.config),
                    variants.sort(function(a, b) {
                        return a.POS - b.POS
                    }),
                    self.cache = new FeatureCache(chr,queryStart,queryEnd,variants),
                    success(variants)) : success(null )
                }
            })
        }
    }
    ;
    var FeatureCache = function(chr, start, end, features) {
        var i, bin, lastBin;
        for (this.chr = chr,
        this.start = start,
        this.end = end,
        this.binSize = (end - start) / 100,
        this.binIndeces = [0],
        this.features = features,
        lastBin = 0,
        i = 0; i < features.length; i++)
            bin = Math.max(0, Math.floor((features[i].POS - this.start) / this.binSize)),
            bin > lastBin && (this.binIndeces.push(i),
            lastBin = bin)
    }
    ;
    return FeatureCache.prototype.featuresBetween = function(start, end) {
        var startBin = Math.max(0, Math.min(Math.floor((start - this.start) / this.binSize) - 1, this.binIndeces.length - 1))
          , endBin = Math.max(0, Math.min(Math.floor((end - this.start) / this.binSize), this.binIndeces.length - 1));
        this.binIndeces[startBin],
        this.binIndeces[endBin];
        return this.features
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    return igv.IdeoPanel = function(parentElement) {
        this.ideograms = {},
        this.contentDiv = $('<div class="igv-ideogram-content-div"></div>'),
        $(parentElement).append(this.contentDiv[0]);
        var myself = this;
        this.contentDiv.click(function(e) {
            var xy, xPercentage, chr, chrLength, locusLength, chrCoveragePercentage, locus;
            xy = igv.translateMouseCoordinates(e, myself.contentDiv),
            xPercentage = xy.x / myself.contentDiv.width(),
            locusLength = igv.browser.trackViewportWidthBP(),
            chr = igv.browser.genome.getChromosome(igv.browser.referenceFrame.chr),
            chrLength = chr.bpLength,
            chrCoveragePercentage = locusLength / chrLength,
            0 > xPercentage - chrCoveragePercentage / 2 && (xPercentage = chrCoveragePercentage / 2),
            xPercentage + chrCoveragePercentage / 2 > 1 && (xPercentage = 1 - chrCoveragePercentage / 2),
            locus = igv.browser.referenceFrame.chr + ":" + igv.numberFormatter(1 + Math.floor((xPercentage - chrCoveragePercentage / 2) * chrLength)) + "-" + igv.numberFormatter(Math.floor((xPercentage + chrCoveragePercentage / 2) * chrLength)),
            igv.browser.search(locus, void 0)
        }),
        this.canvas = $('<canvas class="igv-ideogram-canvas"></canvas>')[0],
        $(this.contentDiv).append(this.canvas),
        this.canvas.setAttribute("width", this.contentDiv.width()),
        this.canvas.setAttribute("height", this.contentDiv.height()),
        this.ctx = this.canvas.getContext("2d")
    }
    ,
    igv.IdeoPanel.prototype.resize = function() {
        this.canvas.setAttribute("width", this.contentDiv.width()),
        this.canvas.setAttribute("height", this.contentDiv.height()),
        this.ideograms = {},
        this.repaint()
    }
    ,
    igv.IdeoPanel.prototype.repaint = function() {
        function drawIdeogram(bufferCtx, ideogramWidth, ideogramHeight) {
            var ideogramTop = 0;
            if (genome) {
                var cytobands = genome.getCytobands(referenceFrame.chr);
                if (cytobands) {
                    var center = ideogramTop + ideogramHeight / 2
                      , xC = []
                      , yC = []
                      , len = cytobands.length;
                    if (0 == len)
                        return;
                    for (var chrLength = cytobands[len - 1].end, scale = ideogramWidth / chrLength, lastPX = -1, i = 0; i < cytobands.length; i++) {
                        var cytoband = cytobands[i]
                          , start = scale * cytoband.start
                          , end = scale * cytoband.end;
                        end > lastPX && ("c" == cytoband.type ? ("p" == cytoband.name.charAt(0) ? (xC[0] = start,
                        yC[0] = ideogramHeight + ideogramTop,
                        xC[1] = start,
                        yC[1] = ideogramTop,
                        xC[2] = end,
                        yC[2] = center) : (xC[0] = end,
                        yC[0] = ideogramHeight + ideogramTop,
                        xC[1] = end,
                        yC[1] = ideogramTop,
                        xC[2] = start,
                        yC[2] = center),
                        bufferCtx.fillStyle = "rgb(150, 0, 0)",
                        bufferCtx.strokeStyle = "rgb(150, 0, 0)",
                        bufferCtx.polygon(xC, yC, 1, 0)) : (bufferCtx.fillStyle = getCytobandColor(cytoband),
                        bufferCtx.fillRect(start, ideogramTop, end - start, ideogramHeight)))
                    }
                }
                bufferCtx.strokeStyle = "black",
                bufferCtx.roundRect(0, ideogramTop, ideogramWidth, ideogramHeight, ideogramHeight / 2, 0, 1),
                lastPX = end
            }
        }
        function getCytobandColor(data) {
            if ("c" == data.type)
                return "rgb(150, 10, 10)";
            var stain = data.stain
              , shade = 230;
            "p" == data.type && (shade = Math.floor(230 - stain / 100 * 230));
            var c = stainColors[shade];
            return null  == c && (c = "rgb(" + shade + "," + shade + "," + shade + ")",
            stainColors[shade] = c),
            c
        }
        try {
            var y, image, bufferCtx, chromosome, widthPercentage, xPercentage, width, widthBP, x, xBP, genome = igv.browser.genome, referenceFrame = igv.browser.referenceFrame, stainColors = [];
            if (this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height),
            !(genome && referenceFrame && genome.getChromosome(referenceFrame.chr)))
                return;
            image = this.ideograms[igv.browser.referenceFrame.chr],
            image || (image = document.createElement("canvas"),
            image.width = this.canvas.width,
            image.height = 13,
            bufferCtx = image.getContext("2d"),
            drawIdeogram(bufferCtx, this.canvas.width, image.height),
            this.ideograms[igv.browser.referenceFrame.chr] = image),
            y = (this.canvas.height - image.height) / 2,
            this.ctx.drawImage(image, 0, y),
            this.ctx.save(),
            chromosome = igv.browser.genome.getChromosome(igv.browser.referenceFrame.chr),
            widthBP = Math.floor(igv.browser.trackViewportWidthBP()),
            xBP = igv.browser.referenceFrame.start,
            widthBP < chromosome.bpLength && (widthPercentage = widthBP / chromosome.bpLength,
            xPercentage = xBP / chromosome.bpLength,
            x = Math.floor(xPercentage * this.canvas.width),
            width = Math.floor(widthPercentage * this.canvas.width),
            x = Math.max(0, x),
            x = Math.min(this.canvas.width - width, x),
            this.ctx.strokeStyle = "red",
            this.ctx.lineWidth = 2,
            this.ctx.strokeRect(x, y, width, image.height + this.ctx.lineWidth - 1),
            this.ctx.restore())
        } catch (e) {
            console.log("Error painting ideogram: " + e.message)
        }
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    function doPath(ctx, x, y) {
        var i, len = x.length;
        for (i = 0; len > i; i++)
            x[i] = Math.round(x[i]),
            y[i] = Math.round(y[i]);
        for (ctx.beginPath(),
        ctx.moveTo(x[0], y[0]),
        i = 1; len > i; i++)
            ctx.lineTo(x[i], y[i]);
        ctx.closePath()
    }
    var debug = !1
      , log = function(msg) {
        if (debug) {
            var d = new Date
              , time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
            "undefined" != typeof copy && copy(msg),
            "undefined" != typeof console && console.log("igv-canvas: " + time + " " + msg)
        }
    }
    ;
    return igv.graphics = {
        setProperties: function(ctx, properties) {
            for (var key in properties)
                if (properties.hasOwnProperty(key)) {
                    var value = properties[key];
                    ctx[key] = value
                }
        },
        strokeLine: function(ctx, x1, y1, x2, y2, properties) {
            x1 = Math.floor(x1) + .5,
            y1 = Math.floor(y1) + .5,
            x2 = Math.floor(x2) + .5,
            y2 = Math.floor(y2) + .5,
            log("stroke line, prop: " + properties),
            ctx.save(),
            properties && igv.graphics.setProperties(ctx, properties),
            ctx.beginPath(),
            ctx.moveTo(x1, y1),
            ctx.lineTo(x2, y2),
            ctx.stroke(),
            ctx.restore()
        },
        fillRect: function(ctx, x, y, w, h, properties) {
            x = Math.round(x),
            y = Math.round(y),
            log("fillRect"),
            properties && (ctx.save(),
            igv.graphics.setProperties(ctx, properties)),
            ctx.fillRect(x, y, w, h),
            properties && ctx.restore()
        },
        fillPolygon: function(ctx, x, y, properties) {
            ctx.save(),
            properties && igv.graphics.setProperties(ctx, properties),
            doPath(ctx, x, y),
            ctx.fill(),
            ctx.restore()
        },
        strokePolygon: function(ctx, x, y, properties) {
            ctx.save(),
            properties && igv.graphics.setProperties(ctx, properties),
            doPath(ctx, x, y),
            ctx.stroke(),
            ctx.restore()
        },
        fillText: function(ctx, text, x, y, properties, transforms) {
            if (properties && (ctx.save(),
            igv.graphics.setProperties(ctx, properties)),
            ctx.save(),
            ctx.translate(x, y),
            transforms)
                for (var transform in transforms) {
                    var value = transforms[transform];
                    "translate" == transform && ctx.translate(value.x, value.y),
                    "rotate" == transform && ctx.rotate(value.angle * Math.PI / 180)
                }
            ctx.fillText(text, 0, 0),
            ctx.restore(),
            properties && ctx.restore()
        },
        strokeText: function(ctx, text, x, y, properties, transforms) {
            if (ctx.save(),
            properties && igv.graphics.setProperties(ctx, properties),
            ctx.translate(x, y),
            transforms)
                for (var transform in transforms) {
                    var value = transforms[transform];
                    "translate" == transform && ctx.translate(value.x, value.y),
                    "rotate" == transform && ctx.rotate(value.angle * Math.PI / 180)
                }
            ctx.strokeText(text, 0, 0),
            ctx.restore()
        },
        strokeCircle: function(ctx, x, y, radius) {
            ctx.beginPath(),
            ctx.arc(x, y, radius, 0, 2 * Math.PI),
            ctx.stroke()
        },
        fillCircle: function(ctx, x, y, radius) {
            ctx.beginPath(),
            ctx.arc(x, y, radius, 0, 2 * Math.PI),
            ctx.fill()
        },
        drawArrowhead: function(ctx, x, y, size, lineWidth) {
            ctx.save(),
            size || (size = 5),
            lineWidth && (ctx.lineWidth = lineWidth),
            ctx.beginPath(),
            ctx.moveTo(x, y - size / 2),
            ctx.lineTo(x, y + size / 2),
            ctx.lineTo(x + size, y),
            ctx.lineTo(x, y - size / 2),
            ctx.closePath(),
            ctx.fill(),
            ctx.restore()
        },
        dashedLine: function(ctx, x1, y1, x2, y2, dashLen, properties) {
            ctx.save(),
            x1 = Math.round(x1),
            y1 = Math.round(y1),
            x2 = Math.round(x2),
            y2 = Math.round(y2),
            dashLen = Math.round(dashLen),
            log("dashedLine"),
            properties && igv.graphics.setProperties(ctx, properties),
            void 0 == dashLen && (dashLen = 2),
            ctx.moveTo(x1, y1);
            for (var dX = x2 - x1, dY = y2 - y1, dashes = Math.floor(Math.sqrt(dX * dX + dY * dY) / dashLen), dashX = dX / dashes, dashY = dY / dashes, q = 0; q++ < dashes; )
                x1 += dashX,
                y1 += dashY,
                ctx[q % 2 == 0 ? "moveTo" : "lineTo"](x1, y1);
            ctx[q % 2 == 0 ? "moveTo" : "lineTo"](x2, y2),
            ctx.restore()
        }
    },
    igv
}(igv || {})
  , igv = function(igv) {
    function clamp(value, min, max) {
        return Math.min(Math.max(value, min), max)
    }
    return igv.hex2Color = function(hex) {
        var cooked = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return null  === cooked ? void 0 : "rgb(" + parseInt(cooked[1], 16) + "," + parseInt(cooked[2], 16) + "," + parseInt(cooked[3], 16) + ")"
    }
    ,
    igv.rgbaColor = function(r, g, b, a) {
        return r = clamp(r, 0, 255),
        g = clamp(g, 0, 255),
        b = clamp(b, 0, 255),
        a = clamp(a, 0, 1),
        "rgba(" + r + "," + g + "," + b + "," + a + ")"
    }
    ,
    igv.rgbColor = function(r, g, b) {
        return r = clamp(r, 0, 255),
        g = clamp(g, 0, 255),
        b = clamp(b, 0, 255),
        "rgb(" + r + "," + g + "," + b + ")"
    }
    ,
    igv.addAlphaToRGB = function(rgbString, alpha) {
        return rgbString.startsWith("rgb") ? rgbString.replace("rgb", "rgba").replace(")", ", " + alpha + ")") : (console.log(rgbString + " is not an rgb style string"),
        rgbString)
    }
    ,
    igv.greyScale = function(value) {
        var grey = clamp(value, 0, 255);
        return "rgb(" + grey + "," + grey + "," + grey + ")"
    }
    ,
    igv.randomGrey = function(min, max) {
        min = clamp(min, 0, 255),
        max = clamp(max, 0, 255);
        var g = Math.round(igv.random(min, max)).toString(10);
        return "rgb(" + g + "," + g + "," + g + ")"
    }
    ,
    igv.randomRGB = function(min, max) {
        min = clamp(min, 0, 255),
        max = clamp(max, 0, 255);
        var r = Math.round(igv.random(min, max)).toString(10)
          , g = Math.round(igv.random(min, max)).toString(10)
          , b = Math.round(igv.random(min, max)).toString(10);
        return "rgb(" + r + "," + g + "," + b + ")"
    }
    ,
    igv.nucleotideColorComponents = {
        A: [0, 200, 0],
        C: [0, 0, 200],
        T: [255, 0, 0],
        G: [209, 113, 5],
        a: [0, 200, 0],
        c: [0, 0, 200],
        t: [255, 0, 0],
        g: [209, 113, 5]
    },
    igv.nucleotideColors = {
        A: "rgb(  0, 200,   0)",
        C: "rgb(  0,   0, 200)",
        T: "rgb(255,   0,   0)",
        G: "rgb(209, 113,   5)",
        a: "rgb(  0, 200,   0)",
        c: "rgb(  0,   0, 200)",
        t: "rgb(255,   0,   0)",
        g: "rgb(209, 113,   5)"
    },
    igv.getCompositeColor = function(dest, src, alpha) {
        var r = Math.floor(alpha * src[0] + (1 - alpha) * dest[0])
          , g = Math.floor(alpha * src[1] + (1 - alpha) * dest[1])
          , b = Math.floor(alpha * src[2] + (1 - alpha) * dest[2]);
        return "rgb(" + r + "," + g + "," + b + ")"
    }
    ,
    igv.createColorString = function(token) {
        return token.contains(",") ? token.startsWith("rgb") ? token : "rgb(" + token + ")" : token
    }
    ,
    igv.BinnedColorScale = function(cs) {
        this.thresholds = cs.thresholds,
        this.colors = cs.colors
    }
    ,
    igv.BinnedColorScale.prototype.getColor = function(value) {
        var i, len = this.thresholds.length;
        for (i = 0; len > i; i++)
            if (value < this.thresholds[i])
                return this.colors[i];
        return this.colors[this.colors.length - 1]
    }
    ,
    igv.GradientColorScale = function(scale) {
        this.scale = scale,
        this.lowColor = "rgb(" + scale.lowR + "," + scale.lowG + "," + scale.lowB + ")",
        this.highColor = "rgb(" + scale.highR + "," + scale.highG + "," + scale.highB + ")",
        this.diff = scale.high - scale.low
    }
    ,
    igv.GradientColorScale.prototype.getColor = function(value) {
        var r, g, b, frac, scale = this.scale;
        return value <= scale.low ? this.lowColor : value >= scale.high ? this.highColor : (frac = (value - scale.low) / this.diff,
        r = Math.floor(scale.lowR + frac * (scale.highR - scale.lowR)),
        g = Math.floor(scale.lowG + frac * (scale.highG - scale.lowG)),
        b = Math.floor(scale.lowB + frac * (scale.highB - scale.lowB)),
        "rgb(" + r + "," + g + "," + b + ")")
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    return igv.constants = {
        dragThreshold: 3,
        defaultColor: "rgb(0,0,150)"
    },
    igv
}(igv || {})
  , igv = function(igv) {
    function createStandardControls(browser, config) {
        var igvLogo, contentKaryo, navigation, searchContainer, searchButton, $trackLabelToggle, zoom, zoomInButton, zoomOutButton, controlDiv = $('<div id="igvControlDiv">')[0], fileInput = document.getElementById("fileInput");
        return fileInput && fileInput.addEventListener("change", function(e) {
            var featureFileReader, localFile = fileInput.files[0];
            featureFileReader = new igv.FeatureFileReader({
                localFile: localFile
            }),
            featureFileReader.readFeatures(function() {
                console.log("success reading " + localFile.name)
            })
        }),
        navigation = $('<div class="igvNavigation">'),
        $(controlDiv).append(navigation[0]),
        config.showNavigation && (igvLogo = $('<div class="igv-logo">'),
        navigation.append(igvLogo[0]),
        searchContainer = $('<div class="igvNavigationSearch">'),
        navigation.append(searchContainer[0]),
        browser.searchInput = $('<input class="igvNavigationSearchInput" type="text" placeholder="Locus Search">'),
        searchContainer.append(browser.searchInput[0]),
        searchButton = $('<i class="igv-app-icon fa fa-search fa-18px shim-left-6">'),
        searchContainer.append(searchButton[0]),
        browser.searchInput.change(function() {
            browser.search($(this).val())
        }),
        searchButton.click(function() {
            browser.search(browser.searchInput.val())
        }),
        browser.$searchResults = $('<div class="igvNavigationSearchResults">'),
        browser.$searchResultsTable = $('<table class="igvNavigationSearchResultsTable">'),
        browser.$searchResults.append(browser.$searchResultsTable[0]),
        searchContainer.append(browser.$searchResults[0]),
        browser.$searchResults.hide(),
        browser.windowSizePanel = new igv.WindowSizePanel(navigation),
        zoom = $('<div class="igvNavigationZoom">'),
        navigation.append(zoom[0]),
        zoomOutButton = $('<i class="igv-app-icon fa fa-minus-square-o fa-24px" style="padding-right: 4px;">'),
        zoom.append(zoomOutButton[0]),
        zoomInButton = $('<i class="igv-app-icon fa fa-plus-square-o fa-24px">'),
        zoom.append(zoomInButton[0]),
        zoomInButton.click(function() {
            igv.browser.zoomIn()
        }),
        zoomOutButton.click(function() {
            igv.browser.zoomOut()
        }),
        $trackLabelToggle = $('<div class="igvNavigationToggleTrackLabels">'),
        $trackLabelToggle.text("hide labels"),
        navigation.append($trackLabelToggle[0]),
        $trackLabelToggle.click(function() {
            browser.trackLabelsVisible = !browser.trackLabelsVisible,
            !1 === browser.trackLabelsVisible ? ($(this).text("show labels"),
            $(".igv-app-icon-container").hide()) : ($(this).text("hide labels"),
            $(".igv-app-icon-container").show())
        })),
        config.showKaryo && (contentKaryo = $("#igvKaryoDiv")[0],
        contentKaryo || (contentKaryo = $('<div id="igvKaryoDiv" class="igv-karyo-div">')[0],
        $(controlDiv).append(contentKaryo)),
        browser.karyoPanel = new igv.KaryoPanel(contentKaryo)),
        controlDiv
    }
    function expandGenome(genomeId) {
        var reference = {
            id: genomeId
        };
        switch (genomeId) {
        case "hg18":
            reference.fastaURL = "//dn7ywbm9isq8j.cloudfront.net/genomes/seq/hg18/hg18.fasta",
            reference.cytobandURL = "//dn7ywbm9isq8j.cloudfront.net/genomes/seq/hg18/cytoBand.txt.gz";
            break;
        case "hg19":
        case "GRCh37":
        default:
            reference.fastaURL = "//dn7ywbm9isq8j.cloudfront.net/genomes/seq/hg19/hg19.fasta",
            reference.cytobandURL = "//dn7ywbm9isq8j.cloudfront.net/genomes/seq/hg19/cytoBand.txt"
        }
        return reference
    }
    function setDefaults(config) {
        config.tracks || (config.tracks = []),
        config.tracks.push({
            type: "sequence",
            order: -9999
        }),
        config.showKaryo = config.showKaryo || !1,
        config.showNavigation = config.showNavigation || !0,
        config.flanking = void 0 === config.flanking ? 1e3 : config.flanking
    }
    function isT2D(options) {
        if (options.tracks && options.tracks.length > 0) {
            var t = options.tracks[0]
              , b = t instanceof igv.GWASTrack;
            return b
        }
        return !1
    }
    return igv.createBrowser = function(parentDiv, config) {
        var igvLogo, contentDiv, headerDiv, trackContainerDiv, browser, rootDiv, controlDiv, bodyObject, palette, trackOrder = 1;
        return igv.browser ? (console.log("Attempt to create 2 browsers."),
        igv.browser) : (config || (config = {}),
        setDefaults(config),
        config.type || (config.type = "IGV"),
        oauth.google.apiKey = config.apiKey,
        oauth.google.access_token = config.oauthToken,
        !config.flanking && isT2D(config) && (config.flanking = 1e5),
        config.genome ? config.reference = expandGenome(config.genome) : config.fastaURL && (config.reference = {
            fastaURL: config.fastaURL,
            cytobandURL: config.cytobandURL
        }),
        config.reference && config.reference.fastaURL ? (config.tracks && config.tracks.forEach(function(track) {
            void 0 === track.order && (track.order = trackOrder++)
        }),
        trackContainerDiv = $('<div id="igvTrackContainerDiv" class="igv-track-container-div">')[0],
        browser = new igv.Browser(config,trackContainerDiv),
        rootDiv = browser.div,
        $(document).mousedown(function(e) {
            browser.isMouseDown = !0
        }),
        $(document).mouseup(function(e) {
            browser.isMouseDown = void 0,
            browser.dragTrackView && $(browser.dragTrackView.igvTrackDragScrim).hide(),
            browser.dragTrackView = void 0
        }),
        $(parentDiv).append($(rootDiv)),
        config.showCommandBar !== !1 && (controlDiv = config.createControls ? config.createControls(browser, config) : createStandardControls(browser, config),
        $(rootDiv).append($(controlDiv))),
        contentDiv = $('<div id="igvContentDiv" class="igv-content-div">')[0],
        $(rootDiv).append(contentDiv),
        headerDiv = $("<div>")[0],
        $(contentDiv).append(headerDiv),
        $(contentDiv).append(trackContainerDiv),
        browser.userFeedback = new igv.UserFeedback($(contentDiv)),
        browser.userFeedback.hide(),
        igv.popover = new igv.Popover(contentDiv),
        bodyObject = $("body"),
        config.trackDefaults && (palette = config.trackDefaults.palette),
        igv.colorPicker = new igv.ColorPicker(bodyObject,palette),
        igv.colorPicker.hide(),
        igv.dialog = new igv.Dialog(bodyObject),
        igv.dialog.hide(),
        igv.dataRangeDialog = new igv.DataRangeDialog(bodyObject),
        igv.dataRangeDialog.hide(),
        $.extend($.ui.dialog.prototype.options, {
            create: function() {
                var $this = $(this);
                $this.parent().find(".ui-dialog-buttonpane button:first").focus(),
                $this.keypress(function(e) {
                    return e.keyCode == $.ui.keyCode.ENTER ? ($this.parent().find(".ui-dialog-buttonpane button:first").click(),
                    !1) : void 0
                })
            }
        }),
        config.showNavigation || (igvLogo = $('<div class="igv-logo-nonav">'),
        $(headerDiv).append(igvLogo[0])),
        browser.ideoPanel = new igv.IdeoPanel(headerDiv),
        browser.ideoPanel.resize(),
        igv.loadGenome(config.reference, function(genome) {
            var referenceWidth = browser.trackViewportWidth();
            0 === referenceWidth && (referenceWidth = 500),
            genome.id = config.reference.genomeId,
            browser.genome = genome,
            browser.addTrack(new igv.RulerTrack);
            var firstChrName = browser.genome.chromosomeNames[0]
              , firstChr = browser.genome.chromosomes[firstChrName];
            if (browser.referenceFrame = new igv.ReferenceFrame(firstChrName,0,firstChr.bpLength / referenceWidth),
            browser.controlPanelWidth = 50,
            browser.updateLocusSearch(browser.referenceFrame),
            browser.ideoPanel && browser.ideoPanel.repaint(),
            browser.karyoPanel && browser.karyoPanel.repaint(),
            browser.initialLocus || config.locus) {
                var locus = browser.initialLocus ? browser.initialLocus : config.locus;
                igv.startSpinnerAtParentElement(parentDiv),
                browser.search(locus, function() {
                    igv.stopSpinnerAtParentElement(parentDiv);
                    var refFrame = igv.browser.referenceFrame
                      , start = refFrame.start;
                    start + igv.browser.trackViewportWidth() * refFrame.bpPerPixel;
                    config.tracks && igv.browser.loadTracksWithConfigList(config.tracks)
                })
            } else
                config.tracks && igv.browser.loadTracksWithConfigList(config.tracks)
        }),
        browser) : void alert("Fatal error:  reference must be defined"))
    }
    ,
    igv
}(igv || {});
CanvasRenderingContext2D.prototype.strokeLine = function(x1, y1, x2, y2, lineWidth) {
    this.save(),
    this.beginPath(),
    lineWidth && (this.lineWidth = lineWidth),
    this.moveTo(x1, y1),
    this.lineTo(x2, y2),
    this.stroke(),
    this.restore()
}
,
CanvasRenderingContext2D.prototype.drawArrowhead = function(x, y, size, lineWidth) {
    this.save(),
    size || (size = 5),
    lineWidth && (this.lineWidth = lineWidth),
    this.beginPath(),
    this.moveTo(x, y - size / 2),
    this.lineTo(x, y + size / 2),
    this.lineTo(x + size, y),
    this.lineTo(x, y - size / 2),
    this.closePath(),
    this.fill(),
    this.restore()
}
,
CanvasRenderingContext2D.prototype.roundRect = function(x, y, width, height, radius, fill, stroke) {
    this.save(),
    "undefined" == typeof stroke && (stroke = !0),
    "undefined" == typeof radius && (radius = 5),
    this.beginPath(),
    this.moveTo(x + radius, y),
    this.lineTo(x + width - radius, y),
    this.quadraticCurveTo(x + width, y, x + width, y + radius),
    this.lineTo(x + width, y + height - radius),
    this.quadraticCurveTo(x + width, y + height, x + width - radius, y + height),
    this.lineTo(x + radius, y + height),
    this.quadraticCurveTo(x, y + height, x, y + height - radius),
    this.lineTo(x, y + radius),
    this.quadraticCurveTo(x, y, x + radius, y),
    this.closePath(),
    stroke && this.stroke(),
    fill && this.fill(),
    this.restore()
}
,
CanvasRenderingContext2D.prototype.polygon = function(x, y, fill, stroke) {
    this.save(),
    "undefined" == typeof stroke && (stroke = !0),
    this.beginPath();
    var len = x.length;
    this.moveTo(x[0], y[0]);
    for (var i = 1; len > i; i++)
        this.lineTo(x[i], y[i]);
    this.closePath(),
    stroke && this.stroke(),
    fill && this.fill(),
    this.restore()
}
,
CanvasRenderingContext2D.prototype.eqTriangle = function(side, cx, cy) {
    this.save();
    var h = side * (Math.sqrt(3) / 2);
    this.beginPath(),
    this.moveTo(cx, cy - h / 2),
    this.lineTo(cx - side / 2, cy + h / 2),
    this.lineTo(cx + side / 2, cy + h / 2),
    this.lineTo(cx, cy - h / 2),
    this.closePath(),
    this.stroke(),
    this.fill(),
    this.restore()
}
,
String.prototype.startsWith || (String.prototype.startsWith = function(aString) {
    return this.length < aString.length ? !1 : this.substr(0, aString.length) == aString
}
),
String.prototype.endsWith || (String.prototype.endsWith = function(aString) {
    return this.length < aString.length ? !1 : this.substr(this.length - aString.length, aString.length) == aString
}
),
String.prototype.contains || (String.prototype.contains = function(it) {
    return -1 != this.indexOf(it)
}
),
String.prototype.splitLines || (String.prototype.splitLines = function() {
    return this.split(/\r\n|\n|\r/gm)
}
),
Array.prototype.shuffle || (Array.prototype.shuffle = function() {
    for (var j, x, i = this.length; i; j = parseInt(Math.random() * i),
    x = this[--i],
    this[i] = this[j],
    this[j] = x)
        ;
    return this
}
),
Array.prototype.swap || (Array.prototype.swap = function(a, b) {
    var tmp = this[a];
    this[a] = this[b],
    this[b] = tmp
}
),
Array.prototype.heapSort || (Array.prototype.heapSort = function(compare) {
    function heapify(array, index, heapSize) {
        var left = 2 * index + 1
          , right = 2 * index + 2
          , largest = index;
        if (heapSize > left && compare(array[left], array[index]) > 0 && (largest = left),
        heapSize > right && compare(array[right], array[largest]) > 0 && (largest = right),
        largest !== index) {
            var temp = array[index];
            array[index] = array[largest],
            array[largest] = temp,
            heapify(array, largest, heapSize)
        }
    }
    function buildMaxHeap(array) {
        for (var i = Math.floor(array.length / 2); i >= 0; i -= 1)
            heapify(array, i, array.length);
        return array
    }
    var temp, array = this, size = this.length;
    buildMaxHeap(array);
    for (var i = size - 1; i > 0; i -= 1)
        temp = array[0],
        array[0] = array[i],
        array[i] = temp,
        size -= 1,
        heapify(array, 0, size);
    return array
}
),
Uint8Array.prototype.toText || (Uint8Array.prototype.toText = function() {
    var i, len, str;
    for (str = "",
    i = 0,
    len = this.byteLength; len > i; i++)
        str += String.fromCharCode(this[i]);
    return str
}
);
var log2 = Math.log(2);
Math.log2 || (Math.log2 = function(x) {
    return Math.log(x) / log2
}
),
Function.prototype.bind || (Function.prototype.bind = function() {
    var fn = this
      , args = Array.prototype.slice.call(arguments)
      , object = args.shift();
    return function() {
        return fn.apply(object, args.concat(Array.prototype.slice.call(arguments)))
    }
}
);
var igv = function(igv) {
    return igv.constrainBBox = function(child, parent) {
        var delta, topLeft, bboxChild = {}, bboxParent = {};
        return bboxParent.left = bboxParent.top = 0,
        bboxParent.right = parent.outerWidth(),
        bboxParent.bottom = parent.outerHeight(),
        topLeft = child.offset(),
        bboxChild.left = topLeft.left - parent.offset().left,
        bboxChild.top = topLeft.top - parent.offset().top,
        bboxChild.right = bboxChild.left + child.outerWidth(),
        bboxChild.bottom = bboxChild.top + child.outerHeight(),
        delta = bboxChild.bottom - bboxParent.bottom,
        delta > 0 && (topLeft.top -= delta,
        bboxChild.top -= delta,
        bboxChild.bottom -= delta,
        delta = bboxChild.top - bboxParent.top,
        0 > delta && (topLeft.top -= delta)),
        topLeft
    }
    ,
    igv.trackMenuItems = function(popover, trackView) {
        var trackItems, trackHeight = trackView.trackDiv.clientHeight, menuItems = [igv.dialogMenuItem(popover, trackView, "Set track name", "Track Name", trackView.track.name, function() {
            function parseAlphanumeric(value) {
                var alphanumeric_re = /(?=.*[a-zA-Z].*)([a-zA-Z0-9 ]+)/
                  , alphanumeric = alphanumeric_re.exec(value);
                return null  !== alphanumeric ? alphanumeric[0] : "untitled"
            }
            var alphanumeric = parseAlphanumeric($(this).val());
            void 0 !== alphanumeric && (igv.setTrackLabel(trackView.track, alphanumeric),
            trackView.update(),
            igv.dialog.hide())
        }), igv.dialogMenuItem(popover, trackView, "Set track height", "Track Height", trackHeight, function() {
            function parseNumber(value) {
                return parseFloat(value, 10)
            }
            var number = parseNumber($(this).val());
            void 0 !== number && (trackView.setTrackHeight(number),
            trackView.track.autoHeight = !1,
            igv.dialog.hide())
        })];
        return trackView.track.popupMenuItems && (trackItems = trackView.track.popupMenuItems(popover),
        trackItems && trackItems.length > 0 && trackItems.forEach(function(trackItem, i) {
            var str;
            trackItem.name ? (str = 0 === i ? '<div class="igv-track-menu-item igv-track-menu-border-top">' : '<div class="igv-track-menu-item">',
            str = str + trackItem.name + "</div>",
            menuItems.push({
                object: $(str),
                click: trackItem.click,
                init: trackItem.init
            })) : 0 === i ? (trackItem.object.addClass("igv-track-menu-border-top"),
            menuItems.push(trackItem)) : menuItems.push(trackItem)
        })),
        trackView.track.removable !== !1 && menuItems.push({
            object: $('<div class="igv-track-menu-item igv-track-menu-border-top">Remove track</div>'),
            click: function() {
                popover.hide(),
                trackView.browser.removeTrack(trackView.track)
            }
        }),
        menuItems
    }
    ,
    igv.dialogMenuItem = function(popover, trackView, gearMenuLabel, dialogLabel, dialogInputValue, dialogInputChange) {
        return {
            object: $('<div class="igv-track-menu-item">' + gearMenuLabel + "</div>"),
            click: function() {
                igv.dialog.trackView = trackView,
                igv.dialog.dialogLabel.text(dialogLabel),
                igv.dialog.dialogInput.val(dialogInputValue),
                igv.dialog.dialogInput.unbind(),
                igv.dialog.dialogInput.change(dialogInputChange),
                igv.dialog.show(),
                popover.hide()
            }
        }
    }
    ,
    igv.dataRangeMenuItem = function(popover, trackView) {
        return {
            object: $('<div class="igv-track-menu-item">Set data range</div>'),
            click: function() {
                var min, max, dataRangeDialog = igv.dataRangeDialog;
                dataRangeDialog.trackView = trackView,
                trackView.track.dataRange ? (min = trackView.track.dataRange.min,
                max = trackView.track.dataRange.max) : (min = 0,
                max = 100),
                dataRangeDialog.minInput.val(min),
                dataRangeDialog.maxInput.val(max),
                dataRangeDialog.logInput.prop("checked", !1),
                dataRangeDialog.ok.unbind(),
                dataRangeDialog.ok.click(function() {
                    min = parseFloat(dataRangeDialog.minInput.val()),
                    max = parseFloat(dataRangeDialog.maxInput.val()),
                    isNaN(min) || isNaN(max) ? alert("Must input numeric values") : (trackView.track.min = min,
                    trackView.track.max = max,
                    console.log("min " + dataRangeDialog.minInput.val() + " max " + dataRangeDialog.maxInput.val() + " log " + dataRangeDialog.logInput.is(":checked")),
                    dataRangeDialog.hide(),
                    trackView.update())
                }),
                dataRangeDialog.show(),
                popover.hide()
            }
        }
    }
    ,
    igv.colorPickerMenuItem = function(popover, trackView) {
        return {
            object: $('<div class="igv-track-menu-item">Set track color</div>'),
            click: function() {
                igv.colorPicker.trackView = trackView,
                igv.colorPicker.show(),
                popover.hide()
            }
        }
    }
    ,
    igv.dialogCloseWithParentObject = function(parentObject, closer) {
        var closeContainer = $('<div class="igv-dialog-close-container">')
          , close_fa = $('<i class="fa fa-times igv-dialog-close-fa">');
        closeContainer.append(close_fa[0]),
        parentObject.append(closeContainer[0]),
        close_fa.hover(function() {
            close_fa.removeClass("fa-times"),
            close_fa.addClass("fa-times-circle"),
            close_fa.css({
                color: "#222"
            })
        }, function() {
            close_fa.removeClass("fa-times-circle"),
            close_fa.addClass("fa-times"),
            close_fa.css({
                color: "#444"
            })
        }),
        close_fa.click(closer)
    }
    ,
    igv.spinner = function(size) {
        var spinnerContainer, spinner;
        return spinnerContainer = document.createElement("div"),
        spinnerContainer.className = "igv-spinner-container",
        spinner = document.createElement("i"),
        spinner.className = "fa fa-spinner fa-spin",
        void 0 !== size && $(spinner).css("font-size", size),
        spinnerContainer.appendChild(spinner),
        spinnerContainer
    }
    ,
    igv.getSpinnerObjectWithParentElement = function(parentElement) {
        return $(parentElement).find("div.igv-spinner-container")
    }
    ,
    igv.startSpinnerAtParentElement = function(parentElement) {
        var spinnerObject = igv.getSpinnerObjectWithParentElement(parentElement);
        spinnerObject && spinnerObject.show()
    }
    ,
    igv.stopSpinnerAtParentElement = function(parentElement) {
        var spinnerObject = igv.getSpinnerObjectWithParentElement(parentElement);
        spinnerObject && spinnerObject.hide()
    }
    ,
    igv.parseUri = function(str) {
        for (var o = igv.parseUri.options, m = o.parser[o.strictMode ? "strict" : "loose"].exec(str), uri = {}, i = 14; i--; )
            uri[o.key[i]] = m[i] || "";
        return uri[o.q.name] = {},
        uri[o.key[12]].replace(o.q.parser, function($0, $1, $2) {
            $1 && (uri[o.q.name][$1] = $2)
        }),
        uri
    }
    ,
    igv.parseUri.options = {
        strictMode: !1,
        key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
        q: {
            name: "queryKey",
            parser: /(?:^|&)([^&=]*)=?([^&]*)/g
        },
        parser: {
            strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
            loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
        }
    },
    igv.domElementRectAsString = function(element) {
        return " x " + element.clientLeft + " y " + element.clientTop + " w " + element.clientWidth + " h " + element.clientHeight
    }
    ,
    igv.isNumber = function(n) {
        return "" === n ? !1 : void 0 === n ? !1 : !isNaN(parseFloat(n)) && isFinite(n)
    }
    ,
    igv.guid = function() {
        return ("0000" + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4)
    }
    ,
    igv.random = function(min, max) {
        return Math.random() * (max - min) + min
    }
    ,
    igv.numberFormatter = function(rawNumber) {
        var dec = String(rawNumber).split(/[.,]/)
          , sep = ","
          , decsep = ".";
        return dec[0].split("").reverse().reduce(function(prev, now, i) {
            return i % 3 === 0 ? prev + sep + now : prev + now
        }).split("").reverse().join("") + (dec[1] ? decsep + dec[1] : "")
    }
    ,
    igv.numberUnFormatter = function(formatedNumber) {
        return formatedNumber.split(",").join().replace(",", "", "g")
    }
    ,
    igv.translateMouseCoordinates = function(e, target) {
        var eFixed = $.event.fix(e)
          , posx = eFixed.pageX - $(target).offset().left
          , posy = eFixed.pageY - $(target).offset().top;
        return {
            x: posx,
            y: posy
        }
    }
    ,
    igv.formatPopoverText = function(nameValueArray) {
        var markup = '<table class="igv-popover-table">';
        return nameValueArray.forEach(function(nameValue) {
            markup += nameValue.name ? '<tr><td class="igv-popover-td"><div class="igv-popoverNameValue"><span class="igv-popoverName">' + nameValue.name + '</span><span class="igv-popoverValue">' + nameValue.value + "</span></div></td></tr>" : "<tr><td>" + nameValue.toString() + "</td></tr>"
        }),
        markup += "</table>"
    }
    ,
    igv.throttle = function(fn, threshhold, scope) {
        threshhold || (threshhold = 200);
        var last, deferTimer;
        return function() {
            var context = scope || this
              , now = +new Date
              , args = arguments;
            last && last + threshhold > now ? (clearTimeout(deferTimer),
            deferTimer = setTimeout(function() {
                last = now,
                fn.apply(context, args)
            }, threshhold)) : (last = now,
            fn.apply(context, args))
        }
    }
    ,
    igv.splitStringRespectingQuotes = function(string, delim) {
        var i, c, tokens = [], len = string.length, n = 0, quote = !1;
        if (len > 0)
            for (tokens[n] = string.charAt(0),
            i = 1; len > i; i++)
                c = string.charAt(i),
                '"' === c ? quote = !quote : quote || c !== delim ? tokens[n] += c : (n++,
                tokens[n] = "");
        return tokens
    }
    ,
    igv.addAjaxExtensions = function() {
        $.ajaxTransport("+binary", function(options, originalOptions, jqXHR) {
            return {
                send: function(_, callback) {
                    var xhr = new XMLHttpRequest
                      , url = options.url
                      , type = options.type
                      , responseType = "arraybuffer";
                    options.data || null ;
                    if (xhr.addEventListener("load", function() {
                        var data = {};
                        data[options.dataType] = xhr.response,
                        callback(xhr.status, xhr.statusText, data, xhr.getAllResponseHeaders())
                    }),
                    xhr.open(type, url),
                    xhr.responseType = responseType,
                    options.headers)
                        for (var prop in options.headers)
                            options.headers.hasOwnProperty(prop) && xhr.setRequestHeader(prop, options.headers[prop])
                },
                abort: function() {
                    jqXHR.abort()
                }
            }
        })
    }
    ,
    igv.isStringOrNumber = function(value) {
        return value.substring || value.toFixed ? !0 : !1
    }
    ,
    igv.log = function(message) {
        igv.enableLogging && console && console.log && console.log(message)
    }
    ,
    igv
}(igv || {})
  , igvxhr = function(igvxhr) {
    function isCrossDomain(url) {
        var origin = window.location.origin;
        return !url.startsWith(origin)
    }
    const NONE = 0
      , GZIP = 1
      , BGZF = 2;
    return igvxhr.isReachable = function(url, continuation) {
        continuation(!0)
    }
    ,
    igvxhr.loadArrayBuffer = function(url, options) {
        options.responseType = "arraybuffer",
        igvxhr.load(url, options)
    }
    ,
    igvxhr.loadJson = function(url, options) {
        var success = options.success
          , method = options.method || (options.sendData ? "POST" : "GET");
        "POST" === method && (options.contentType = "application/json"),
        options.success = function(result) {
            success(result ? JSON.parse(result) : null )
        }
        ,
        igvxhr.load(url, options)
    }
    ,
    igvxhr.loadString = function(url, options) {
        var compression, success = options.success;
        compression = options.bgz ? BGZF : url.endsWith(".gz") ? GZIP : NONE,
        compression === NONE ? (options.mimeType = "text/plain; charset=x-user-defined",
        igvxhr.load(url, options)) : (options.responseType = "arraybuffer",
        options.success = function(data) {
            var result = igvxhr.arrayBufferToString(data, compression);
            success(result)
        }
        ,
        igvxhr.load(url, options))
    }
    ,
    igvxhr.load = function(url, options) {
        var header_keys, key, value, i, xhr = new XMLHttpRequest, sendData = options.sendData, method = options.method || (sendData ? "POST" : "GET"), success = options.success, error = options.error || success, abort = options.abort || error, timeout = options.timeout || error, task = options.task, range = options.range, responseType = options.responseType, contentType = options.contentType, mimeType = options.mimeType, headers = options.headers, isSafari = 0 == navigator.vendor.indexOf("Apple") && /\sSafari\//.test(navigator.userAgent);
        if (task && (task.xhrRequest = xhr),
        range && isSafari && (console.log(isSafari),
        url += url.contains("?") ? "&" : "?",
        url += "someRandomSeed=" + Math.random().toString(36)),
        xhr.open(method, url),
        range) {
            var rangeEnd = range.size ? range.start + range.size - 1 : "";
            xhr.setRequestHeader("Range", "bytes=" + range.start + "-" + rangeEnd)
        }
        if (contentType && xhr.setRequestHeader("Content-Type", contentType),
        mimeType && xhr.overrideMimeType(mimeType),
        responseType && (xhr.responseType = responseType),
        headers)
            for (header_keys = Object.keys(headers),
            i = 0; i < header_keys.length; i++)
                key = header_keys[i],
                value = headers[key],
                xhr.setRequestHeader(key, value);
        xhr.onload = function(event) {
            0 == xhr.status || xhr.status >= 200 && xhr.status <= 300 ? success(xhr.response, xhr) : error(null , xhr)
        }
        ,
        xhr.onerror = function(event) {
            return isCrossDomain(url) && url && igv.browser.crossDomainProxy && url != igv.browser.crossDomainProxy && !options.crossDomainRetried ? (options.sendData = "url=" + url,
            options.crossDomainRetried = !0,
            void igvxhr.load(igv.browser.crossDomainProxy, options)) : 416 === xhr.status ? void success(new ArrayBuffer(0), xhr) : void 0
        }
        ,
        xhr.ontimeout = function(event) {
            console.log("Aborted"),
            timeout(null , xhr)
        }
        ,
        xhr.onabort = function(event) {
            console.log("Aborted"),
            abort(null , xhr)
        }
        ,
        xhr.send(sendData)
    }
    ,
    igvxhr.loadHeader = function(url, options) {
        function parseResponseHeaders(headerStr) {
            var headers = {};
            if (!headerStr)
                return headers;
            for (var headerPairs = headerStr.split("\r\n"), i = 0, len = headerPairs.length; len > i; i++) {
                var headerPair = headerPairs[i]
                  , index = headerPair.indexOf(": ");
                if (index > 0) {
                    var key = headerPair.substring(0, index).toLowerCase()
                      , val = headerPair.substring(index + 2);
                    headers[key] = val
                }
            }
            return headers
        }
        var header_keys, key, value, i, xhr = new XMLHttpRequest, method = "HEAD", success = options.success, error = options.error || success, timeout = options.timeout || error, headers = options.headers;
        if (xhr.open(method, url),
        headers)
            for (header_keys = Object.keys(headers),
            i = 0; i < header_keys.length; i++)
                key = header_keys[i],
                value = headers[key],
                console && console.log && console.log("Adding to header: " + key + "=" + value),
                xhr.setRequestHeader(key, value);
        xhr.onload = function(event) {
            var headerStr = xhr.getAllResponseHeaders()
              , headerDictionary = parseResponseHeaders(headerStr);
            success(headerDictionary)
        }
        ,
        xhr.onerror = function(event) {
            error(null , xhr)
        }
        ,
        xhr.ontimeout = function(event) {
            timeout(null )
        }
        ,
        xhr.send()
    }
    ,
    igvxhr.getContentLength = function(url, options) {
        var continuation = options.success;
        options.error || (options.error = function() {
            continuation(-1)
        }
        ),
        options.success = function(header) {
            var contentLengthString = header ? header["content-length"] : null ;
            continuation(contentLengthString ? parseInt(contentLengthString) : -1)
        }
        ,
        igvxhr.loadHeader(url, options)
    }
    ,
    igvxhr.loadStringFromFile = function(localfile, options) {
        var fileReader = new FileReader
          , success = options.success
          , error = options.error || options.success;
        options.abort || options.error,
        options.timeout || options.error,
        options.range;
        fileReader.onload = function(e) {
            var compression, result;
            compression = options.bgz ? BGZF : localfile.name.endsWith(".gz") ? GZIP : NONE,
            result = igvxhr.arrayBufferToString(fileReader.result, compression),
            success(result, localfile)
        }
        ,
        fileReader.onerror = function(e) {
            console.log("error uploading local file " + localfile.name),
            error(null , fileReader)
        }
        ,
        fileReader.readAsArrayBuffer(localfile)
    }
    ,
    igvxhr.arrayBufferToString = function(arraybuffer, compression) {
        var plain, inflate;
        compression === GZIP ? (inflate = new Zlib.Gunzip(new Uint8Array(arraybuffer)),
        plain = inflate.decompress()) : plain = compression === BGZF ? new Uint8Array(igv.unbgzf(arraybuffer)) : new Uint8Array(arraybuffer);
        for (var result = "", i = 0, len = plain.length; len > i; i++)
            result += String.fromCharCode(plain[i]);
        return result
    }
    ,
    igvxhr
}(igvxhr || {})
  , igv = function(igv) {
    function searchAll(interval, node, results) {
        return node.interval.overlaps(interval) && results.push(node.interval),
        node.left != NIL && node.left.max >= interval.low && searchAll.call(this, interval, node.left, results),
        node.right != NIL && node.right.min <= interval.high && searchAll.call(this, interval, node.right, results),
        results
    }
    function leftRotate(x) {
        var y = x.right;
        x.right = y.left,
        y.left != NIL && (y.left.parent = x),
        y.parent = x.parent,
        x.parent == NIL ? this.root = y : x.parent.left == x ? x.parent.left = y : x.parent.right = y,
        y.left = x,
        x.parent = y,
        applyUpdate.call(this, x)
    }
    function rightRotate(x) {
        var y = x.left;
        x.left = y.right,
        y.right != NIL && (y.right.parent = x),
        y.parent = x.parent,
        x.parent == NIL ? this.root = y : x.parent.right == x ? x.parent.right = y : x.parent.left = y,
        y.right = x,
        x.parent = y,
        applyUpdate.call(this, x)
    }
    function applyUpdate(node) {
        for (; node != NIL; ) {
            var nodeMax = node.left.max > node.right.max ? node.left.max : node.right.max
              , intervalHigh = node.interval.high;
            node.max = nodeMax > intervalHigh ? nodeMax : intervalHigh;
            var nodeMin = node.left.min < node.right.min ? node.left.min : node.right.min
              , intervalLow = node.interval.low;
            node.min = intervalLow > nodeMin ? nodeMin : intervalLow,
            node = node.parent
        }
    }
    function Interval(low, high, value) {
        this.low = low,
        this.high = high,
        this.value = value
    }
    function Node(interval) {
        this.parent = NIL,
        this.left = NIL,
        this.right = NIL,
        this.interval = interval,
        this.color = RED
    }
    var BLACK = 1
      , RED = 2
      , NIL = {};
    return NIL.color = BLACK,
    NIL.parent = NIL,
    NIL.left = NIL,
    NIL.right = NIL,
    igv.IntervalTree = function() {
        this.root = NIL
    }
    ,
    igv.IntervalTree.prototype.insert = function(start, end, value) {
        var interval = new Interval(start,end,value)
          , x = new Node(interval);
        for (this.treeInsert(x),
        x.color = RED; x != this.root && x.parent.color == RED; )
            if (x.parent == x.parent.parent.left) {
                var y = x.parent.parent.right;
                y.color == RED ? (x.parent.color = BLACK,
                y.color = BLACK,
                x.parent.parent.color = RED,
                x = x.parent.parent) : (x == x.parent.right && (x = x.parent,
                leftRotate.call(this, x)),
                x.parent.color = BLACK,
                x.parent.parent.color = RED,
                rightRotate.call(this, x.parent.parent))
            } else {
                var y = x.parent.parent.left;
                y.color == RED ? (x.parent.color = BLACK,
                y.color = BLACK,
                x.parent.parent.color = RED,
                x = x.parent.parent) : (x == x.parent.left && (x = x.parent,
                rightRotate.call(this, x)),
                x.parent.color = BLACK,
                x.parent.parent.color = RED,
                leftRotate.call(this, x.parent.parent))
            }
        this.root.color = BLACK
    }
    ,
    igv.IntervalTree.prototype.findOverlapping = function(start, end) {
        var searchInterval = new Interval(start,end,0);
        if (this.root === NIL)
            return [];
        var intervals = searchAll.call(this, searchInterval, this.root, []);
        return intervals.length > 1 && intervals.sort(function(i1, i2) {
            return i1.low - i2.low
        }),
        intervals
    }
    ,
    igv.IntervalTree.prototype.logIntervals = function() {
        function logNode(node, indent) {
            for (var space = "", i = 0; indent > i; i++)
                space += " ";
            console.log(space + node.interval.low + " " + node.interval.high),
            indent += 5,
            node.left != NIL && logNode(node.left, indent),
            node.right != NIL && logNode(node.right, indent)
        }
        logNode(this.root, 0)
    }
    ,
    igv.IntervalTree.prototype.mapIntervals = function(func) {
        function applyInterval(node) {
            func(node.interval),
            node.left != NIL && applyInterval(node.left),
            node.right != NIL && applyInterval(node.right)
        }
        applyInterval(this.root)
    }
    ,
    igv.IntervalTree.prototype.treeInsert = function(x) {
        for (var node = this.root, y = NIL; node != NIL; )
            y = node,
            node = x.interval.low <= node.interval.low ? node.left : node.right;
        x.parent = y,
        y == NIL ? (this.root = x,
        x.left = x.right = NIL) : x.interval.low <= y.interval.low ? y.left = x : y.right = x,
        applyUpdate.call(this, x)
    }
    ,
    Interval.prototype.equals = function(other) {
        return other ? this == other ? !0 : this.low == otherInterval.low && this.high == otherInterval.high : !1
    }
    ,
    Interval.prototype.compareTo = function(other) {
        return this.low < other.low ? -1 : this.low > other.low ? 1 : this.high < other.high ? -1 : this.high > other.high ? 1 : 0
    }
    ,
    Interval.prototype.overlaps = function(other) {
        try {
            return this.low <= other.high && other.low <= this.high
        } catch (e) {
            alert(e)
        }
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    var log = function(txt) {}
    ;
    return igv.KaryoPanel = function(parentElement) {
        this.ideograms = null ,
        igv.guichromosomes = [],
        this.div = $('<div class="igv-karyo-div"></div>')[0],
        $(parentElement).append(this.div);
        var contentDiv = $('<div class="igv-karyo-content-div"></div>')[0];
        $(this.div).append(contentDiv);
        var canvas = $('<canvas class="igv-karyo-canvas"></canvas>')[0];
        $(contentDiv).append(canvas),
        canvas.setAttribute("width", contentDiv.offsetWidth),
        canvas.setAttribute("height", contentDiv.offsetHeight),
        this.canvas = canvas,
        this.ctx = canvas.getContext("2d");
        var tipCanvas = document.createElement("canvas");
        tipCanvas.style.position = "absolute",
        tipCanvas.style.width = "100px",
        tipCanvas.style.height = "20px",
        tipCanvas.style.left = "-2000px",
        tipCanvas.setAttribute("width", "100px"),
        tipCanvas.setAttribute("height", "20px");
        var tipCtx = tipCanvas.getContext("2d");
        contentDiv.appendChild(tipCanvas),
        this.canvas.onmousemove = function(e) {
            for (var mouseCoords = igv.translateMouseCoordinates(e, canvas), mouseX = mouseCoords.x, mouseY = mouseCoords.y, hit = !1, i = 0; i < igv.guichromosomes.length; i++) {
                var g = igv.guichromosomes[i];
                if (g.x < mouseX && g.right > mouseX && g.y < mouseY && g.bottom > mouseY) {
                    var dy = mouseY - g.y
                      , bp = Math.round(g.size * dy / g.h);
                    tipCanvas.style.left = Math.round(mouseX + 20) + "px",
                    tipCanvas.style.top = Math.round(mouseY - 5) + "px",
                    tipCtx.clearRect(0, 0, tipCanvas.width, tipCanvas.height),
                    tipCtx.fillStyle = "rgb(255,255,220)",
                    tipCtx.fillRect(0, 0, tipCanvas.width, tipCanvas.height),
                    tipCtx.fillStyle = "rgb(0,0,0)";
                    var mb = Math.round(bp / 1e6);
                    tipCtx.fillText(g.name + " @ " + mb + " MB", 3, 12),
                    hit = !0;
                    break
                }
            }
            hit || (tipCanvas.style.left = "-2000px")
        }
        ,
        this.canvas.onclick = function(e) {
            var mouseCoords = igv.translateMouseCoordinates(e, canvas)
              , mouseX = mouseCoords.x
              , mouseY = mouseCoords.y;
            igv.navigateKaryo(mouseX, mouseY)
        }
    }
    ,
    igv.navigateKaryo = function(mouseX, mouseY) {
        for (var i = 0; i < igv.guichromosomes.length; i++) {
            var g = igv.guichromosomes[i];
            if (g.x < mouseX && g.right > mouseX && g.y < mouseY && g.bottom > mouseY) {
                var dy = mouseY - g.y
                  , bp = Math.round(g.size * dy / g.h);
                log("Going to position " + bp),
                igv.browser["goto"](g.name, bp);
                break
            }
        }
        igv.browser.update()
    }
    ,
    igv.KaryoPanel.prototype.resize = function() {
        var canvas = this.canvas;
        canvas.setAttribute("width", canvas.clientWidth),
        canvas.setAttribute("height", canvas.clientHeight),
        log("Resize called: width=" + canvas.clientWidth + "/" + canvas.clientHeight),
        this.ideograms = void 0,
        this.repaint()
    }
    ,
    igv.KaryoPanel.prototype.repaint = function() {
        function drawImage() {
            image = document.createElement("canvas"),
            image.width = w,
            image.height = h;
            var bufferCtx = image.getContext("2d")
              , nr = 0
              , col = 0
              , row = 1
              , y = top;
            igv.guichromosomes = [];
            for (chr in chromosomes) {
                if (nr > nrchr)
                    break;
                1 == row && 2 == nrrows && nr + 1 > nrchr / 2 && (row = 2,
                col = 0,
                y = y + chrheight + top),
                nr++,
                col++;
                var chromosome = genome.getChromosome(chr);
                "chrM" != chr || chromosome.bpLength || (chromosome.bpLength = 16e3),
                chromosome.x = col * totalchrwidth,
                chromosome.y = y;
                var guichrom = new Object;
                guichrom.name = chr,
                igv.guichromosomes.push(guichrom),
                drawIdeogram(guichrom, chromosome.x, chromosome.y, chromosome, bufferCtx, chrwidth, chrheight, maxLen)
            }
            this.ideograms = image,
            log("============= PROCESSING " + igv.browser.trackViews.length + " TRACKS");
            for (var tracknr = 0, i = 0; i < igv.browser.trackViews.length; i++) {
                var trackPanel = igv.browser.trackViews[i]
                  , track = trackPanel.track;
                if (track.getSummary && track.loadSummary) {
                    log("Found track with summary: " + track.name);
                    var source = track;
                    window.source = track,
                    source.loadSummary("chr1", 0, 1e6, function(featureList) {
                        if (featureList) {
                            nr = 0;
                            for (chr in chromosomes) {
                                var guichrom = igv.guichromosomes[nr];
                                nr++,
                                guichrom && guichrom.size && loadfeatures(source, chr, 0, guichrom.size, guichrom, bufferCtx, tracknr)
                            }
                        }
                    }),
                    tracknr++
                }
            }
        }
        function drawFeatures(source, featurelist, guichrom, ideogramLeft, top, bufferCtx, ideogramWidth, ideogramHeight, longestChr, tracknr) {
            if (genome && guichrom && featurelist) {
                var len = featurelist.length;
                if (0 != len)
                    for (var scale = ideogramHeight / longestChr, dx = 1, i = 0; i < featurelist.length; i++) {
                        var feature = featurelist[i]
                          , color = "rgb(0,0,150)"
                          , value = feature.score;
                        source.getColor && (color = source.getColor(value));
                        var starty = scale * feature.start + top
                          , endy = scale * feature.end + top
                          , dy = Math.max(.01, endy - starty);
                        bufferCtx.fillStyle = color,
                        bufferCtx.fillRect(ideogramLeft + ideogramWidth + 2 * tracknr + 1, starty, dx, dy)
                    }
            }
        }
        function drawIdeogram(guichrom, ideogramLeft, top, chromosome, bufferCtx, ideogramWidth, ideogramHeight, longestChr) {
            if (genome && chromosome) {
                var cytobands = genome.getCytobands(chromosome.name);
                if (cytobands) {
                    var centerx = ideogramLeft + ideogramWidth / 2
                      , xC = []
                      , yC = []
                      , len = cytobands.length
                      , scale = ideogramHeight / longestChr;
                    guichrom.x = ideogramLeft,
                    guichrom.y = top,
                    guichrom.w = ideogramWidth,
                    guichrom.right = ideogramLeft + ideogramWidth;
                    var last = 0
                      , lastPY = -1;
                    if (len > 0)
                        last = cytobands[len - 1].end,
                        guichrom.h = scale * last,
                        guichrom.size = last;
                    else {
                        var MINH = 5;
                        lastPY = top + MINH,
                        guichrom.h = MINH,
                        guichrom.size = MINH / scale
                    }
                    if (guichrom.longest = longestChr,
                    guichrom.bottom = top + guichrom.h,
                    len > 0)
                        for (var i = 0; i < cytobands.length; i++) {
                            var cytoband = cytobands[i]
                              , starty = scale * cytoband.start + top
                              , endy = scale * cytoband.end + top;
                            if (endy > lastPY)
                                if ("c" == cytoband.type)
                                    "p" == cytoband.name.charAt(0) ? (yC[0] = starty,
                                    xC[0] = ideogramWidth + ideogramLeft,
                                    yC[1] = starty,
                                    xC[1] = ideogramLeft,
                                    yC[2] = endy,
                                    xC[2] = centerx) : (yC[0] = endy,
                                    xC[0] = ideogramWidth + ideogramLeft,
                                    yC[1] = endy,
                                    xC[1] = ideogramLeft,
                                    yC[2] = starty,
                                    xC[2] = centerx),
                                    bufferCtx.fillStyle = "rgb(220, 150, 100)",
                                    bufferCtx.strokeStyle = "rgb(150, 0, 0)",
                                    bufferCtx.polygon(xC, yC, 1, 0);
                                else {
                                    var dy = endy - starty;
                                    bufferCtx.fillStyle = getCytobandColor(cytoband),
                                    bufferCtx.fillRect(ideogramLeft, starty, ideogramWidth, dy)
                                }
                            lastPY = endy
                        }
                }
                bufferCtx.fillStyle = null ,
                bufferCtx.lineWidth = 1,
                bufferCtx.strokeStyle = "darkgray";
                var r = ideogramWidth / 2;
                bufferCtx.roundRect(ideogramLeft, top - r / 2, ideogramWidth, lastPY - top + r, ideogramWidth / 2, 0, 1),
                bufferCtx.font = "bold 10px Arial",
                bufferCtx.fillStyle = "rgb(0, 0, 0)";
                var name = chromosome.name;
                name.length > 3 && (name = name.substring(3)),
                bufferCtx.fillText(name, ideogramLeft + ideogramWidth / 2 - 3 * name.length, top - 10)
            }
        }
        function getCytobandColor(data) {
            if ("c" == data.type)
                return "rgb(150, 10, 10)";
            var stain = data.stain
              , shade = 230;
            "p" == data.type && (shade = Math.floor(230 - stain / 100 * 230));
            var c = stainColors[shade];
            return null  == c && (c = "rgb(" + shade + "," + shade + "," + shade + ")",
            stainColors[shade] = c),
            c
        }
        function loadfeatures(source, chr, start, end, guichrom, bufferCtx, tracknr) {
            source.getSummary(chr, start, end, function(featureList) {
                featureList && (len = featureList.length,
                drawFeatures(source, featureList, guichrom, guichrom.x, guichrom.y, bufferCtx, chrwidth, chrheight, maxLen, tracknr),
                me.repaint())
            })
        }
        var genome = igv.browser.genome
          , referenceFrame = igv.browser.referenceFrame
          , stainColors = []
          , w = this.canvas.width
          , h = this.canvas.height;
        if (this.ctx.clearRect(0, 0, w, h),
        genome && referenceFrame && genome.chromosomes && referenceFrame.chr) {
            var chromosomes = genome.getChromosomes()
              , image = this.ideograms;
            if (chromosomes.length < 1)
                return void log("No chromosomes yet, returning");
            var nrchr = 24
              , nrrows = 1;
            300 > w && (nrrows = 2);
            var totalchrwidth = Math.min(50, (w - 20) / (nrchr + 2) * nrrows)
              , chrwidth = Math.min(20, totalchrwidth / 2)
              , top = 25
              , chrheight = h / nrrows - top
              , cytobands = genome.getCytobands("chr1")
              , me = this
              , maxLen = cytobands[cytobands.length - 1].end;
            image && null  != image || drawImage.call(this),
            this.ctx.drawImage(image, 0, 0),
            this.ctx.save();
            var chr = referenceFrame.chr;
            this.genome && (chr = this.genome.getChromosomeName(chr));
            var chromosome = igv.browser.genome.getChromosome(chr);
            if (chromosome) {
                var ideoScale = longestChr.bpLength / chrheight
                  , boxHeight = Math.max(3, igv.browser.trackViewportWidth() * referenceFrame.bpPerPixel / ideoScale);
                this.ctx.strokeStyle = "rgb(150, 0, 0)",
                this.ctx.lineWidth = 2,
                this.ctx.strokeRect(chromosome.x - 3, chromosome.y - 3, chrwidth + 6, boxHeight + 6),
                this.ctx.restore()
            } else
                log("Could not find chromosome " + chr)
        }
    }
    ,
    igv
}(igv || {})
  , oauth = function(oauth) {
    if (!oauth.google) {
        var tokenType, expiresIn, user, OAUTHURL = "https://accounts.google.com/o/oauth2/auth?", VALIDURL = "https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=", REDIRECT = "http://localhost/igv-web/emptyPage.html", _url = OAUTHURL + "scope=https://www.googleapis.com/auth/genomics https://www.googleapis.com/auth/userinfo.profile&state=%2Fprofile&redirect_uri=http%3A%2F%2Flocalhost%2Figv-web%2FemptyPage.html&response_type=token&client_id=661332306814-8nt29308rppg325bkq372vli8nm3na14.apps.googleusercontent.com", loggedIn = !1;
        oauth.google = {
            login: function() {
                var win = window.open(_url, "windowname1", "width=800, height=600")
                  , pollTimer = window.setInterval(function() {
                    try {
                        if (console.log(win.document.URL),
                        -1 != win.document.URL.indexOf(REDIRECT)) {
                            window.clearInterval(pollTimer);
                            var url = win.document.URL;
                            oauth.google.access_token = oauth.google.gup(url, "access_token"),
                            tokenType = oauth.google.gup(url, "token_type"),
                            expiresIn = oauth.google.gup(url, "expires_in"),
                            win.close(),
                            oauth.google.validateToken(oauth.google.access_token)
                        }
                    } catch (e) {}
                }, 500)
            },
            validateToken: function(token) {
                $.ajax({
                    url: VALIDURL + token,
                    data: null ,
                    success: function(responseText) {
                        oauth.google.getUserInfo(),
                        loggedIn = !0
                    },
                    dataType: "jsonp"
                })
            },
            getUserInfo: function() {
                $.ajax({
                    url: "https://www.googleapis.com/oauth2/v1/userinfo?access_token=" + oauth.google.access_token,
                    data: null ,
                    success: function(resp) {
                        user = resp,
                        console.log(user)
                    },
                    dataType: "jsonp"
                })
            },
            gup: function(url, name) {
                name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                var regexS = "[\\#&]" + name + "=([^&#]*)"
                  , regex = new RegExp(regexS)
                  , results = regex.exec(url);
                return null  == results ? "" : results[1]
            },
            startLogoutPolling: function() {
                $("#loginText").show(),
                $("#logoutText").hide(),
                loggedIn = !1,
                $("#uName").text("Welcome "),
                $("#imgHolder").attr("src", "none.jpg")
            }
        }
    }
    return oauth
}(oauth || {})
  , igv = function(igv) {
    return igv.isBlank = function(line) {
        var meh = line.match(/\S+/g);
        return !meh
    }
    ,
    igv.isComment = function(line) {
        var index = line.indexOf("#");
        return 0 == index
    }
    ,
    igv.getQueryValue = function(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)"
          , regex = new RegExp(regexS)
          , results = regex.exec(window.location.href);
        return null  == results ? void 0 : results[1]
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    function popoverPosition(pageX, pageY, popoverWidget) {
        var left, popupRect, containerCoordinates = {
            x: pageX,
            y: pageY
        }, containerRect = {
            x: 0,
            y: 0,
            width: $(window).width(),
            height: $(window).height()
        }, popupX = pageX, popupY = pageY;
        return popupX -= $(popoverWidget.parentDiv).offset().left,
        popupY -= $(popoverWidget.parentDiv).offset().top,
        popupRect = {
            x: popupX,
            y: popupY,
            width: popoverWidget.popover.outerWidth(),
            height: popoverWidget.popover.outerHeight()
        },
        left = popupX,
        containerCoordinates.x + popupRect.width > containerRect.width && (left = popupX - popupRect.width),
        {
            left: left + "px",
            top: popupY + "px"
        }
    }
    return igv.Popover = function(parentDiv) {
        this.markupWithParentDiv(parentDiv)
    }
    ,
    igv.Popover.prototype.markupWithParentDiv = function(parentDiv) {
        var popoverHeader, self = this;
        this.parentDiv || (this.parentDiv = parentDiv,
        this.popover = $('<div class="igv-popover">'),
        $(this.parentDiv).append(this.popover[0]),
        popoverHeader = $('<div class="igv-popoverHeader">'),
        this.popover.append(popoverHeader[0]),
        igv.dialogCloseWithParentObject(popoverHeader, function() {
            self.hide()
        }),
        this.popoverContent = $("<div>"),
        this.popover.append(this.popoverContent[0]))
    }
    ,
    igv.Popover.prototype.testData = function(rows) {
        var i, name, nameValues = [];
        for (i = 0; rows > i; i++)
            name = "name " + i,
            nameValues.push({
                name: name,
                value: "verbsgohuman"
            });
        return nameValues
    }
    ,
    igv.Popover.prototype.hide = function() {
        this.popover.hide()
    }
    ,
    igv.Popover.prototype.presentTrackMenu = function(pageX, pageY, trackView) {
        var container = $('<div class="igv-track-menu-container">')
          , trackMenuItems = igv.trackMenuItems(this, trackView);
        trackMenuItems.forEach(function(trackMenuItem, index, tmi) {
            if (trackMenuItem.object) {
                var ob = trackMenuItem.object;
                container.append(ob[0])
            } else
                container.append(trackMenuItem)
        }),
        this.popoverContent.empty(),
        this.popoverContent.removeClass("igv-popoverTrackPopupContent"),
        this.popoverContent.append(container[0]),
        trackMenuItems.forEach(function(trackMenuItem) {
            var ob = trackMenuItem.object
              , cl = trackMenuItem.click
              , init = trackMenuItem.init;
            cl && ob.click(cl),
            init && init()
        }),
        this.popover.css(popoverPosition(pageX, pageY, this)),
        this.popover.show(),
        this.popover.offset(igv.constrainBBox(this.popover, $(igv.browser.trackContainerDiv)))
    }
    ,
    igv.Popover.prototype.presentTrackPopup = function(pageX, pageY, content) {
        content && (this.popoverContent.addClass("igv-popoverTrackPopupContent"),
        this.popoverContent.html(content),
        this.popover.css(popoverPosition(pageX, pageY, this)).show())
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    return igv.ReferenceFrame = function(chr, start, bpPerPixel) {
        this.chr = chr,
        this.start = start,
        this.bpPerPixel = bpPerPixel
    }
    ,
    igv.ReferenceFrame.prototype.toPixels = function(bp) {
        return bp / this.bpPerPixel
    }
    ,
    igv.ReferenceFrame.prototype.toBP = function(pixels) {
        return this.bpPerPixel * pixels
    }
    ,
    igv.ReferenceFrame.prototype.shiftPixels = function(pixels) {
        this.start += pixels * this.bpPerPixel
    }
    ,
    igv.ReferenceFrame.prototype.description = function() {
        return "ReferenceFrame " + this.chr + " " + igv.numberFormatter(Math.floor(this.start)) + " bpp " + this.bpPerPixel
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    function TickSpacing(majorTick, majorUnit, unitMultiplier) {
        this.majorTick = majorTick,
        this.majorUnit = majorUnit,
        this.unitMultiplier = unitMultiplier
    }
    function findSpacing(maxValue) {
        function log10(x) {
            var dn = Math.log(10);
            return Math.log(x) / dn
        }
        if (10 > maxValue)
            return new TickSpacing(1,"",1);
        var nZeroes = Math.floor(log10(maxValue))
          , majorUnit = ""
          , unitMultiplier = 1;
        nZeroes > 9 && (majorUnit = "gb",
        unitMultiplier = 1e9),
        nZeroes > 6 ? (majorUnit = "mb",
        unitMultiplier = 1e6) : nZeroes > 3 && (majorUnit = "kb",
        unitMultiplier = 1e3);
        var nMajorTicks = maxValue / Math.pow(10, nZeroes - 1);
        return 25 > nMajorTicks ? new TickSpacing(Math.pow(10, nZeroes - 1),majorUnit,unitMultiplier) : new TickSpacing(Math.pow(10, nZeroes) / 2,majorUnit,unitMultiplier)
    }
    return igv.RulerTrack = function() {
        this.height = 50,
        this.name = "",
        this.id = "ruler",
        this.disableButtons = !0,
        this.ignoreTrackMenu = !0,
        this.order = -Number.MAX_VALUE
    }
    ,
    igv.RulerTrack.prototype.getFeatures = function(chr, bpStart, bpEnd, success, task) {
        success([])
    }
    ,
    igv.RulerTrack.prototype.draw = function(options) {
        function formatNumber(anynum, decimal) {
            var divider = 10;
            switch (decimal) {
            case 0:
                divider = 1;
                break;
            case 1:
                divider = 10;
                break;
            case 2:
                divider = 100;
                break;
            default:
                divider = 1e3
            }
            var workNum = Math.abs(Math.round(anynum * divider) / divider)
              , workStr = "" + workNum;
            -1 == workStr.indexOf(".") && (workStr += ".");
            for (var dStr = workStr.substr(0, workStr.indexOf(".")), dNum = dStr - 0, pStr = workStr.substr(workStr.indexOf(".")); pStr.length - 1 < decimal; )
                pStr += "0";
            if ("." == pStr && (pStr = ""),
            dNum >= 1e3) {
                var dLen = dStr.length;
                dStr = parseInt("" + dNum / 1e3) + "," + dStr.substring(dLen - 3, dLen)
            }
            dNum >= 1e6 && (dLen = dStr.length,
            dStr = parseInt("" + dNum / 1e6) + "," + dStr.substring(dLen - 7, dLen));
            var retval = dStr + pStr;
            return 0 > anynum && (retval = "(" + retval + ")"),
            retval
        }
        var fontStyle, range, ts, spacing, nTick, x, ctx = options.context;
        for (fontStyle = {
            textAlign: "center",
            font: "10px PT Sans",
            fillStyle: "rgba(64, 64, 64, 1)",
            strokeStyle: "rgba(64, 64, 64, 1)"
        },
        range = Math.floor(1100 * options.bpPerPixel),
        ts = findSpacing(range),
        spacing = ts.majorTick,
        nTick = Math.floor(options.bpStart / spacing) - 1,
        x = 0,
        igv.graphics.setProperties(ctx, fontStyle); x < options.pixelWidth; ) {
            var l = Math.floor(nTick * spacing);
            x = Math.round((l - 1 - options.bpStart + .5) / options.bpPerPixel);
            var chrPosition = formatNumber(l / ts.unitMultiplier, 0) + " " + ts.majorUnit;
            nTick % 1 == 0 && igv.graphics.fillText(ctx, chrPosition, x, this.height - 15),
            igv.graphics.strokeLine(ctx, x, this.height - 10, x, this.height - 2),
            nTick++
        }
        igv.graphics.strokeLine(ctx, 0, this.height - 1, options.pixelWidth, this.height - 1)
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    return igv.SequenceTrack = function(config) {
        this.name = "",
        this.id = "sequence",
        this.sequenceType = config.sequenceType || "dna",
        this.height = 15,
        this.disableButtons = !0,
        this.order = config.order || 9999,
        this.ignoreTrackMenu = !0
    }
    ,
    igv.SequenceTrack.prototype.getFeatures = function(chr, bpStart, bpEnd, continuation, task) {
        igv.browser.referenceFrame.bpPerPixel > 1 ? continuation(null ) : igv.browser.genome.sequence.getSequence(chr, bpStart, bpEnd, continuation, task)
    }
    ,
    igv.SequenceTrack.prototype.draw = function(options) {
        var len, w, y, pos, offset, b, p0, p1, pc, c, sequence = options.features, ctx = options.context, bpPerPixel = options.bpPerPixel, bpStart = options.bpStart, pixelWidth = options.pixelWidth, bpEnd = bpStart + pixelWidth * bpPerPixel + 1;
        if (sequence)
            for (len = sequence.length,
            w = 1 / bpPerPixel,
            y = this.height / 2,
            pos = bpStart; bpEnd >= pos; pos++)
                offset = pos - bpStart,
                len > offset && (b = sequence[offset],
                p0 = Math.floor(offset * w),
                p1 = Math.floor((offset + 1) * w),
                pc = Math.round((p0 + p1) / 2),
                c = this.color ? this.color : "dna" === this.sequenceType ? igv.nucleotideColors[b] : "rgb(0, 0, 150)",
                c || (c = "gray"),
                bpPerPixel > .1 ? igv.graphics.fillRect(ctx, p0, 0, p1 - p0, 10, {
                    fillStyle: c
                }) : igv.graphics.strokeText(ctx, b, pc, y, {
                    strokeStyle: c,
                    font: "normal 10px Arial",
                    textAlign: "center"
                }))
    }
    ,
    igv
}(igv || {});
Array.isArray || (Array.isArray = function(vArg) {
    return "[object Array]" === Object.prototype.toString.call(vArg)
}
),
Set ? Set.prototype.isEmpty = function() {
    return 0 === this.size
}
 : (Set = function() {
    this.data = {},
    this.add.apply(this, arguments)
}
,
Set.prototype = {
    add: function() {
        for (var key, i = 0; i < arguments.length; i++)
            if (key = arguments[i],
            Array.isArray(key) || this._isPseudoArray(key))
                for (var j = 0; j < key.length; j++)
                    this._add(key[j]);
            else if (key instanceof Set) {
                var self = this;
                key.each(function(val, key) {
                    self._add(key, val)
                })
            } else
                this._add(key);
        return this
    },
    _add: function(key, val) {
        return "undefined" == typeof val && (val = key),
        this.data[this._makeKey(key)] = val,
        this
    },
    _getKey: function(arg) {
        return arg
    },
    _makeKey: function(arg) {
        return arg
    },
    _removeItem: function(key) {
        delete this.data[this._getKey(key)]
    },
    _isPseudoArray: function(item) {
        return !1
    },
    "delete": function(key) {
        for (var item, j = 0; j < arguments.length; j++)
            if (item = arguments[j],
            Array.isArray(item) || this._isPseudoArray(item))
                for (var i = 0; i < item.length; i++)
                    this._removeItem(item[i]);
            else
                this._removeItem(item);
        return this
    },
    has: function(key) {
        return key = this._makeKey(key),
        Object.prototype.hasOwnProperty.call(this.data, key)
    },
    hasAll: function(args) {
        var testSet = this.makeNew.apply(this, arguments)
          , self = this;
        return testSet.every(function(data, key) {
            return self.has(key)
        })
    },
    makeSet: function(args) {
        return args instanceof Set ? args : this.makeNew.apply(this, arguments)
    },
    equals: function(otherSet) {
        return otherSet = this.makeSet(otherSet),
        this.isSubset(otherSet) && this.isSuperset(otherSet)
    },
    isEmpty: function() {
        for (var key in this.data)
            if (this.has(key))
                return !1;
        return !0
    },
    size: function() {
        var size = 0;
        for (var key in this.data)
            this.has(key) && size++;
        return size
    },
    keys: function() {
        var results = [];
        return this.each(function(data) {
            results.push(data)
        }),
        results
    },
    clear: function() {
        return this.data = {},
        this
    },
    makeNew: function() {
        var newSet = new this.constructor;
        return arguments.length && newSet.add.apply(newSet, arguments),
        newSet
    },
    union: function(otherSet) {
        otherSet = this.makeSet(otherSet);
        var newSet = this.makeNew(this);
        return newSet.add(otherSet),
        newSet
    },
    intersection: function(otherSet) {
        otherSet = this.makeSet(otherSet);
        var newSet = this.makeNew();
        return this.each(function(data, key) {
            otherSet.has(key) && newSet._add(key, data)
        }),
        newSet
    },
    difference: function(otherSet) {
        otherSet = this.makeSet(otherSet);
        var newSet = this.makeNew();
        return this.each(function(data, key) {
            otherSet.has(key) || newSet._add(key, data)
        }),
        newSet
    },
    notInBoth: function(otherSet) {
        otherSet = this.makeSet(otherSet);
        var newSet = this.difference(otherSet);
        return newSet.add(otherSet.difference(this))
    },
    isSubset: function(otherSet) {
        return otherSet = this.makeSet(otherSet),
        this.eachReturn(function(data, key) {
            return otherSet.has(key) ? void 0 : !1
        })
    },
    isSuperset: function(otherSet) {
        otherSet = this.makeSet(otherSet);
        var self = this;
        return otherSet.eachReturn(function(data, key) {
            return self.has(key) ? void 0 : !1
        })
    },
    each: function(fn) {
        return this.eachReturn(fn),
        this
    },
    eachReturn: function(fn) {
        for (var key in this.data)
            if (this.has(key) && fn.call(this, this.data[key], key) === !1)
                return !1;
        return !0
    },
    filter: function(fn) {
        var newSet = this.makeNew();
        return this.each(function(data, key) {
            fn.call(this, key) === !0 && newSet._add(key, data)
        }),
        newSet
    },
    map: function(fn) {
        var newSet = this.makeNew();
        return this.each(function(data, key) {
            var ret = fn.call(this, key);
            "undefined" != typeof ret && newSet._add(key, data)
        }),
        newSet
    },
    some: function(fn) {
        var found = !1;
        return this.eachReturn(function(key) {
            return fn.call(this, key) === !0 ? (found = !0,
            !1) : void 0
        }),
        found
    },
    every: function(fn) {
        return this.eachReturn(fn)
    }
},
Set.prototype.constructor = Set);
var igv = function(igv) {
    var transformations;
    return igv.SVG = function() {
        this.svg = "",
        this.contents = [],
        transformations = []
    }
    ,
    igv.SVG.prototype.setProperties = function(properties) {
        var str = "";
        for (var key in properties)
            if (properties.hasOwnProperty(key)) {
                var value = properties[key];
                "font-family" === key ? str += "font-family:" + value + ";" : "font-size" === key ? str += "font-size:" + value + ";" : "fillStyle" == key ? str += "fill:" + value + ";" : "fill" === key ? str += "fill:" + value + ";" : "strokeStyle" == key ? str += "stroke:" + value + ";" : "stroke" === key ? str += "stroke:" + value + ";" : "stroke-width" === key ? str += "stroke-width:" + value + ";" : console.log("Unknown property: " + key)
            }
        return str
    }
    ,
    igv.SVG.prototype.setTransforms = function(transforms, x, y) {
        var str = "";
        for (var key in transforms) {
            if (transforms.hasOwnProperty(key)) {
                var value = transforms[key];
                "rotate" === key ? (str += "rotate(" + value.angle,
                str += "," + x,
                str += "," + y,
                str += ")") : "translate" === key ? (str += "translate(" + value[x],
                "y" in value && (str += "," + value.y),
                str += ")") : console.log("Unknown transform: " + key)
            }
            str += " "
        }
        return str
    }
    ,
    igv.SVG.prototype.clearRect = function(x, y, w, h) {}
    ,
    igv.SVG.prototype.strokeLine = function(x1, y1, x2, y2, properties, transforms) {
        var str = "";
        str += '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '"',
        properties && (str += ' style="' + this.setProperties(properties) + '"'),
        transforms && (str += ' transform="' + this.setTransforms(transforms, x1, y1) + '"'),
        str += "/>",
        this.contents.push(str)
    }
    ,
    igv.SVG.prototype.fillRect = function(x, y, w, h, properties, transforms) {
        var str = "";
        str += '<rect x="' + x + '" y="' + y,
        str += '" width="' + w + '" height="' + h + '"',
        properties && (str += ' style="' + this.setProperties(properties) + '"'),
        transforms && (str += ' transform="' + this.setTransforms(transforms, x, y) + '"'),
        str += "/>",
        this.contents.push(str)
    }
    ,
    igv.SVG.prototype.fillRectWithCenter = function(centerX, centerY, width, height, properties, transforms) {
        var str = "";
        str += '<rect x="' + (centerX - width / 2) + '" y="' + (centerY - height / 2),
        str += '" width="' + width + '" height="' + height + '"',
        properties && (str += ' style="' + this.setProperties(properties) + '"'),
        transforms && (str += ' transform="' + this.setTransforms(transforms, centerX, centerY) + '"'),
        str += "/>",
        this.contents.push(str)
    }
    ,
    igv.SVG.prototype.fillPolygon = function(x, y, properties, transforms) {
        var str = "";
        str += '<polygon points="';
        for (var index = 0; index < x.length; index++)
            str += " " + x[index] + "," + y[index];
        str += '"',
        properties && (str += ' style="' + this.setProperties(properties) + '"'),
        transforms && (str += ' transform="' + this.setTransforms(transforms, x, y) + '"'),
        str += "/>",
        this.contents.push(str)
    }
    ,
    igv.SVG.prototype.fillText = function(text, x, y, properties, transforms) {
        var str = "";
        str += '<text x="' + x + '" y="' + y + '"',
        properties && (str += ' style="' + this.setProperties(properties) + '"'),
        transforms && (str += ' transform="' + this.setTransforms(transforms, x, y) + '"'),
        str += ">",
        str += text,
        str += "</text>",
        this.contents.push(str)
    }
    ,
    igv.SVG.prototype.strokeText = function(text, x, y, properties, transforms) {
        var str = "";
        str += '<text x="' + x + '" y="' + y + '"',
        properties && (str += ' style="' + this.setProperties(properties) + '"'),
        transforms && (str += ' transform="' + this.setTransforms(transforms, x, y) + '"'),
        str += ">",
        str += text,
        str += "</text>",
        this.contents.push(str)
    }
    ,
    igv.SVG.prototype.strokeCircle = function(x, y, radius, properties, transforms) {
        var str = "";
        str += '<circle cx="' + x + '" cy="' + y + '" r="' + radius + '" stroke="black" fill-opacity="0.0"/>',
        this.contents.push(str)
    }
    ,
    igv.SVG.prototype.string = function() {
        var string = "";
        string += '<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">';
        for (var index = 0; index < this.contents.length; index++)
            string += "\n" + this.contents[index];
        return string += "</svg>"
    }
    ,
    igv.SVG.prototype.innerString = function() {
        for (var string = "", index = 0; index < this.contents.length; index++)
            string += "\n" + this.contents[index];
        return string
    }
    ,
    igv
}(igv || {}), igv = function(igv) {
    return igv.loadTabixIndex = function(tabixURL, config, continuation) {}
    ,
    igv
}(igv || {}), igv = function(igv) {
    return igv.configTrack = function(track, config) {
        track.config = config,
        track.url = config.url,
        config.name = config.name || config.label,
        config.name ? track.name = config.name : config.localFile ? track.name = config.localFile.name : track.name = config.url,
        track.id = config.id || track.name,
        track.order = config.order,
        track.color = config.color || igv.constants.defaultColor,
        track.removable = void 0 === config.removable ? !0 : config.removable,
        track.height = config.height || ("bed" === config.type ? 100 : 50),
        track.autoHeight = void 0 === config.autoHeight ? void 0 === config.height : !0,
        track.minHeight = config.minHeight || Math.min(25, this.height),
        track.maxHeight = config.maxHeight || Math.max(500, this.height),
        void 0 === config.maxRows && (config.maxRows = 500),
        track.maxRows = config.maxRows,
        config.visibilityWindow ? track.visibilityWindow = config.visibilityWindow : "variant" === config.featureType && (config.visibilityWindow = 1e6,
        track.visibilityWindow = config.visibilityWindow)
    }
    ,
    igv.inferTypes = function(config) {
        function inferFileFormat(config) {
            var idx, ext, path = config.url || config.localFile.name, fn = path.toLowerCase();
            switch (fn.endsWith(".gz") ? fn = fn.substr(0, fn.length - 3) : (fn.endsWith(".txt") || fn.endsWith(".tab")) && (fn = fn.substr(0, fn.length - 4)),
            idx = fn.lastIndexOf("."),
            ext = 0 > idx ? fn : fn.substr(idx)) {
            case ".bw":
            case ".bigwig":
                config.format = config.format || "bigwig";
                break;
            case ".bb":
            case ".bigbed":
                config.format = config.format || "bigbed";
            case ".gff3":
            case ".gtf":
                config.format = config.format || "gff";
            default:
                config.format = ext.substr(1)
            }
        }
        function inferFeatureType(config) {
            switch (config.format) {
            case "bw":
            case "bigwig":
            case "wig":
            case "bedgraph":
                config.featureType = config.featureType || "data";
                break;
            case "vcf":
                config.featureType = config.featureType || "variant";
                break;
            case "seg":
                config.featureType = config.featureType || "seg";
                break;
            case "bam":
                config.featureType = config.featureType || "alignment";
                break;
            default:
                config.featureType = config.featureType || "annotation"
            }
        }
        function translateTypeField(config) {
            switch (config.type) {
            case "bed":
                config.format = "bed",
                config.featureType = "annotation";
                break;
            case "vcf":
                config.format = "vcf",
                config.featureType = "variant";
                break;
            case "FusionJuncSpan":
                config.format = "FusionJuncSpan",
                config.featureType = "FusionJuncSpan";
                break;
            case "wig":
                config.format = "wig",
                config.featureType = "data",
                config.renderType = "wig";
                break;
            case "bigwig":
                config.format = "bigwig",
                config.featureType = "data",
                config.renderType = "wig";
                break;
            case "bedgraph":
                config.format = "bedgraph",
                config.featureType = "data",
                config.renderType = "wig";
                break;
            case "seg":
                config.format = "seq",
                config.featureType = "seg";
                break;
            case "aneu":
                config.format = "aneu",
                config.featureType = "aneu";
                break;
            case "t2d":
                config.featureType = "gwas";
                break;
            case "gtexGWAS":
                config.format = "gtexGWAS",
                config.featureType = "gwas";
                break;
            case "eqtl":
                config.format = "eqtl",
                config.featureType = "eqtl";
                break;
            case "bam":
                config.format = "bam",
                config.featureType = "alignment";
                break;
            case "sequence":
                config.featureType = "sequence",
                config.sequenceType = "dna"
            }
        }
        var sourceType = config.sourceType || "file";
        config.type ? translateTypeField(config) : "file" === sourceType && (void 0 === config.format && inferFileFormat(config),
        inferFeatureType(config))
    }
    ,
    igv.setTrackLabel = function(track, label) {
        track.name = label,
        track.description ? track.labelButton.innerHTML = track.name : "CURSOR" !== this.browser.type ? track.labelSpan.innerHTML = track.name : track.trackLabelDiv.innerHTML = track.name,
        track.trackView && track.trackView.repaint()
    }
    ,
    igv.setTrackColor = function(track, color) {
        track.color = color,
        track.trackView && (track.trackView.repaint(),
        "CURSOR" === this.browser.type && track.cursorHistogram && track.cursorHistogram.render(track))
    }
    ,
    igv
}(igv || {}), igv;
igv = function(igv) {
    return igv.TrackFilter = function(trackPanel) {
        this.trackPanel = trackPanel,
        this.guid = igv.guid(),
        this.isFilterActive = !1,
        this.previousRadioButton = void 0,
        this.radioButton = void 0
    }
    ,
    igv.TrackFilter.prototype.setWithJSON = function(json) {
        function radioButtonWithID(radioButtonID) {
            var chosen = void 0
              , radioButtonGroupContainer = $("#modalBody_" + myself.guid).find(".radio");
            return radioButtonGroupContainer.each(function() {
                var radio = $(this).find("input");
                radioButtonID === radio[0].id && (chosen = radio,
                chosen.prop("checked", !0))
            }),
            chosen
        }
        var myself = this
          , modalPresentationButton = $("#modalPresentationButton_" + this.guid)
          , minimumElement = $("#minimumScoreFilterID_" + this.guid)
          , maximumElement = $("#maximumScoreFilterID_" + this.guid);
        this.isFilterActive = json.isFilterActive,
        this.radioButton = void 0 === json.radioButtonIDPrefix ? void 0 : radioButtonWithID(json.radioButtonIDPrefix + this.guid),
        "minMaxRadio_" + this.guid === this.radioButton[0].id ? (minimumElement.val(json.minimum),
        maximumElement.val(json.maximum),
        this.minimum = json.minimum,
        this.maximum = json.maximum,
        (void 0 !== json.minimum || void 0 !== json.maximum) && modalPresentationButton.addClass("igv-trackfilter-fa-selected")) : this.isFilterActive && modalPresentationButton.addClass("igv-trackfilter-fa-selected")
    }
    ,
    igv.TrackFilter.prototype.jsonRepresentation = function() {
        var json, re = new RegExp(this.guid,"g");
        return json = {
            isFilterActive: this.isFilterActive,
            radioButtonIDPrefix: void 0 == this.radioButton[0] ? void 0 : this.radioButton[0].id.replace(re, ""),
            minimum: void 0 === this.minimum ? void 0 : this.minimum,
            maximum: void 0 === this.maximum ? void 0 : this.maximum
        }
    }
    ,
    igv.TrackFilter.prototype.makeTrackFilterOverlayRenderer = function(cursorHistogramRenderMinimumOverlay, cursorHistogramRenderMaximumOverlay) {
        var myself = this
          , trackFilterOverlayRenderer = function() {}
        ;
        return "minMaxRadio_" + this.guid === this.radioButton[0].id && (trackFilterOverlayRenderer = function() {
            myself.minimum && cursorHistogramRenderMinimumOverlay(myself.minimum),
            myself.maximum && cursorHistogramRenderMaximumOverlay(myself.maximum)
        }
        ),
        trackFilterOverlayRenderer
    }
    ,
    igv.TrackFilter.prototype.doEvaluateFilter = function() {
        var modalPresentationButton = $("#modalPresentationButton_" + this.guid)
          , minimumElement = $("#minimumScoreFilterID_" + this.guid)
          , maximumElement = $("#maximumScoreFilterID_" + this.guid);
        return this.isFilterActive ? (modalPresentationButton.addClass("igv-trackfilter-fa-selected"),
        "minMaxRadio_" + this.guid === this.radioButton[0].id && (this.minimum = igv.isNumber(minimumElement.val()) ? parseFloat(minimumElement.val(), 10) : void 0,
        this.maximum = igv.isNumber(maximumElement.val()) ? parseFloat(maximumElement.val(), 10) : void 0,
        void 0 === this.minimum && void 0 === this.maximum && modalPresentationButton.removeClass("igv-trackfilter-fa-selected")),
        void this.trackPanel.browser.cursorModel.filterRegions()) : (modalPresentationButton.removeClass("igv-trackfilter-fa-selected"),
        void this.trackPanel.browser.cursorModel.filterRegions())
    }
    ,
    igv.TrackFilter.prototype.evaluate = function(featureCache, region, regionWidth) {
        var score = region.getScore(featureCache, regionWidth);
        return "minMaxRadio_" + this.guid === this.radioButton[0].id ? this.isIncluded(score) : "regionContainsFeatureRadio_" + this.guid === this.radioButton[0].id ? -1 !== score : "regionLacksFeatureRadio_" + this.guid === this.radioButton[0].id ? -1 === score : void 0
    }
    ,
    igv.TrackFilter.prototype.isIncluded = function(score) {
        var includeMinimum, includeMaximum;
        return includeMinimum = void 0 === this.minimum ? !0 : score >= this.minimum,
        includeMaximum = void 0 === this.maximum ? !0 : score <= this.maximum,
        includeMinimum && includeMaximum
    }
    ,
    igv.TrackFilter.prototype.createTrackFilterWidgetWithParentElement = function(parentDiv) {
        function chosenRadioButton(radioButtonGroupContainer) {
            var chosen = void 0;
            return radioButtonGroupContainer.each(function() {
                var radio = $(this).find("input");
                radio[0].checked && (chosen = radio);
            }),
            chosen
        }
        var modalPresentationButton, modalDialogDataTarget, closeTrackFilterModal, applyTrackFilterModal, radioButtonGroupContainer, modalDialogCallback, myself = this;
        parentDiv.innerHTML = this.createFilterModalMarkupWithGUID(this.guid),
        modalDialogDataTarget = $("#modalDialogDataTarget_" + this.guid),
        modalDialogDataTarget.on("shown.bs.modal", function(e) {
            myself.previousRadioButton = myself.radioButton,
            modalDialogCallback = function() {
                myself.radioButton = myself.previousRadioButton,
                myself.radioButton.prop("checked", !0)
            }
        }),
        modalDialogDataTarget.on("hidden.bs.modal", function(e) {
            modalDialogCallback()
        }),
        radioButtonGroupContainer = $("#modalBody_" + this.guid).find(".radio"),
        myself.radioButton = chosenRadioButton(radioButtonGroupContainer),
        modalPresentationButton = $("#modalPresentationButton_" + this.guid),
        radioButtonGroupContainer.click(function() {
            myself.previousRadioButton = myself.radioButton,
            myself.radioButton = $(this).find("input")
        }),
        closeTrackFilterModal = $("#closeTrackFilterModal_" + this.guid),
        closeTrackFilterModal.on("click", function(e) {}),
        applyTrackFilterModal = $("#applyTrackFilterModal_" + this.guid),
        applyTrackFilterModal.on("click", function(e) {
            modalDialogCallback = function() {
                myself.isFilterActive = !(myself.radioButton[0].id === "inActiveFilterRadio_" + myself.guid),
                myself.doEvaluateFilter()
            }
        })
    }
    ,
    igv.TrackFilter.prototype.createFilterModalMarkupWithGUID = function(guid) {
        var filterModalPresentationButtonMarkup, filterModalMarkup, re = new RegExp("GUID","g");
        return filterModalPresentationButtonMarkup = this.createFilterModalPresentationButtonMarkupWithGUID(guid),
        filterModalMarkup = '<!-- modal dialog --> <div id="modalDialogDataTarget_GUID" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"> <div class="spacer20"></div> <h4> Display only regions that meet the criteria: </h4> <div class="spacer20"></div> </div><!-- /.modal-header --> <div id="modalBody_GUID" class="modal-body"> <div class="radio"> <div class="spacer5"></div> <label> <input id="inActiveFilterRadio_GUID" type="radio" name="trackFilterRadioButtonGroup_GUID" value="option4"> All regions </label> <div class="spacer5"></div> </div><!-- radio - all regions --> <hr> <div class="radio"> <div> <label> <input id="minMaxRadio_GUID" type="radio" name="trackFilterRadioButtonGroup_GUID" value="option1" checked> Regions that contain features whose scores are bounded by min and max </label> </div> <div class="spacer20"></div> <div class="container"> <div class="row"><!-- row --> <div class="col-md-3"><!-- column --> <div class="input-group input-group-md"><!-- maximumScore input group --> <span class="input-group-addon">Maximum</span> <input id="maximumScoreFilterID_GUID" type="text" class="form-control" placeholder=""> </div><!-- maximumScore input group --> </div><!-- column --> </div><!-- maximum row --> <div class="spacer20"></div> <div class="row"><!-- row --> <div class="col-md-3"><!-- column --> <div class="input-group input-group-md"><!-- minimumScore input group --> <span class="input-group-addon">Minimum</span> <input id="minimumScoreFilterID_GUID" type="text" class="form-control" placeholder=""> </div><!-- minimumScore input group --> </div><!-- column --> </div><!-- minimum row --> </div><!-- min/max container --> </div><!-- radio - regions are bounded by min/max --> <hr> <div class="radio"> <div class="spacer5"></div> <label> <input id="regionContainsFeatureRadio_GUID" type="radio" name="trackFilterRadioButtonGroup_GUID" value="option2"> Regions that contain features </label> <div class="spacer5"></div> </div><!-- radio - regions that contain features --> <hr> <div class="radio"> <div class="spacer5"></div> <label> <input id="regionLacksFeatureRadio_GUID" type="radio" name="trackFilterRadioButtonGroup_GUID" value="option3"> Regions that do not contain features </label> <div class="spacer5"></div> </div><!-- radio - regions that do not contain features --> </div><!-- /.modal-body --> <div class="modal-footer"> <button id="closeTrackFilterModal_GUID" type="button" class="btn btn-default" data-dismiss="modal">Cancel</button> <button id="applyTrackFilterModal_GUID" type="button" class="btn btn-primary" data-dismiss="modal">Apply</button> </div><!-- /.modal-footer --> </div><!-- /.modal-content --> </div><!-- /.modal-dialog --> </div>',
        filterModalMarkup = filterModalMarkup.replace(re, guid),
        filterModalPresentationButtonMarkup + filterModalMarkup
    }
    ,
    igv.TrackFilter.prototype.createFilterModalPresentationButtonMarkupWithGUID = function(guid) {
        var presentationButton, re = new RegExp("GUID","g");
        return presentationButton = '<i id="modalPresentationButton_GUID" class="glyphicon glyphicon-filter igv-trackfilter-fa" data-toggle="modal" data-target="#modalDialogDataTarget_GUID"></i>',
        presentationButton = presentationButton.replace(re, guid)
    }
    ,
    igv
}(igv || {});
var igv = function(igv) {
    return igv.TrackMenuPopupDialog = function(trackMenu, dialogLabel, inputValue, ok, width, height) {
        var dialogLabelRE, inputValueRE, htmlString, myself = this;
        htmlString = '<div id="dialog-form" title="DIALOG_LABEL"><p class="validateTips"></p><form><fieldset><input type="text" name="name" id="name" value="INPUT_VALUE"></fieldset></form></div>',
        dialogLabelRE = new RegExp("DIALOG_LABEL","g"),
        htmlString = htmlString.replace(dialogLabelRE, dialogLabel),
        inputValueRE = new RegExp("INPUT_VALUE","g"),
        htmlString = htmlString.replace(inputValueRE, inputValue),
        $("body").append($.parseHTML(htmlString)),
        this.dialogForm = $("#dialog-form"),
        this.form = this.dialogForm.find("form"),
        this.name = $("#name"),
        this.tips = $(".validateTips"),
        this.dialogForm.dialog({
            autoOpen: !1,
            width: width || 320,
            height: height || 256,
            modal: !0,
            buttons: {
                ok: ok,
                cancel: function() {
                    myself.dialogForm.dialog("close")
                }
            },
            close: function() {
                myself.form[0].reset(),
                myself.dialogForm.remove(),
                myself.dialogForm = void 0,
                trackMenu && trackMenu.hide()
            }
        }),
        this.form.on("submit", function(event) {
            event.preventDefault(),
            $("#users").find(" tbody").append("<tr><td>" + myself.name.val() + "</td></tr>"),
            myself.dialogForm.dialog("close")
        })
    }
    ,
    igv.TrackMenuPopupDialog.prototype.updateTips = function(t) {
        var myself = this;
        this.tips.text(t).addClass("ui-state-highlight"),
        setTimeout(function() {
            myself.tips.removeClass("ui-state-highlight", 1500)
        }, 500)
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    function setTrackHeight_(newHeight, update) {
        var trackHeightStr;
        this.track.minHeight && (newHeight = Math.max(this.track.minHeight, newHeight)),
        this.track.maxHeight && (newHeight = Math.min(this.track.maxHeight, newHeight)),
        newHeight !== this.track.height && (trackHeightStr = newHeight + "px",
        this.track.height = newHeight,
        this.trackDiv.style.height = trackHeightStr,
        this.track.paintAxis && (this.controlCanvas.style.height = trackHeightStr,
        this.controlCanvas.setAttribute("height", newHeight)),
        this.viewportDiv.style.height = trackHeightStr,
        this.canvas.setAttribute("height", this.canvas.clientHeight),
        "CURSOR" === this.browser.type && this.track.cursorHistogram.updateHeightAndInitializeHistogramWithTrack(this.track),
        (void 0 === update || update === !0) && this.update())
    }
    function Tile(chr, tileStart, tileEnd, scale, image) {
        this.chr = chr,
        this.startBP = tileStart,
        this.endBP = tileEnd,
        this.scale = scale,
        this.image = image
    }
    function addRulerTrackHandlers(trackView) {
        function sweepWidthThresholdUnmet(sweepWidth) {
            return rulerWidth / (igv.browser.referenceFrame.bpPerPixel * sweepWidth) > igv.browser.pixelPerBasepairThreshold() ? !0 : !1
        }
        var left, rulerSweepWidth, dx, isMouseDown = void 0, isMouseIn = void 0, mouseDownXY = void 0, mouseMoveXY = void 0, rulerWidth = $(trackView.contentDiv).width();
        $(document).mousedown(function(e) {
            mouseDownXY = igv.translateMouseCoordinates(e, trackView.contentDiv),
            left = mouseDownXY.x,
            rulerSweepWidth = 0,
            trackView.rulerSweeper.css({
                display: "inline",
                left: left + "px",
                width: rulerSweepWidth + "px"
            }),
            isMouseIn = !0
        }),
        $(trackView.contentDiv).mousedown(function(e) {
            isMouseDown = !0
        }),
        $(document).mousemove(function(e) {
            isMouseDown && isMouseIn && (mouseMoveXY = igv.translateMouseCoordinates(e, trackView.contentDiv),
            dx = mouseMoveXY.x - mouseDownXY.x,
            rulerSweepWidth = Math.abs(dx),
            trackView.rulerSweeper.css({
                width: rulerSweepWidth + "px"
            }),
            0 > dx && (left = mouseDownXY.x + dx,
            trackView.rulerSweeper.css({
                left: left + "px"
            })))
        }),
        $(document).mouseup(function(e) {
            var locus, ss, ee, trackHalfWidthBP, trackWidthBP, centroidZoom, chromosome, chromosomeLength;
            isMouseDown && (isMouseDown = !1,
            isMouseIn = !1,
            trackView.rulerSweeper.css({
                display: "none",
                left: "0px",
                width: "0px"
            }),
            ss = igv.browser.referenceFrame.start + left * igv.browser.referenceFrame.bpPerPixel,
            ee = ss + rulerSweepWidth * igv.browser.referenceFrame.bpPerPixel,
            sweepWidthThresholdUnmet(rulerSweepWidth) && (chromosome = igv.browser.genome.getChromosome(igv.browser.referenceFrame.chr),
            chromosomeLength = chromosome.bpLength,
            trackWidthBP = igv.browser.trackViewportWidth() / igv.browser.pixelPerBasepairThreshold(),
            trackHalfWidthBP = .5 * trackWidthBP,
            centroidZoom = (ee + ss) / 2,
            0 > centroidZoom - trackHalfWidthBP ? (ss = 1,
            ee = trackWidthBP) : centroidZoom + trackHalfWidthBP > chromosomeLength ? (ee = chromosomeLength,
            ss = 1 + ee - trackWidthBP) : (ss = 1 + centroidZoom - trackHalfWidthBP,
            ee = centroidZoom + trackHalfWidthBP)),
            locus = igv.browser.referenceFrame.chr + ":" + igv.numberFormatter(Math.floor(ss)) + "-" + igv.numberFormatter(Math.floor(ee)),
            igv.browser.search(locus, void 0))
        })
    }
    function addTrackHandlers(trackView) {
        var popupTimer, isMouseDown = !1, lastMouseX = void 0, mouseDownX = void 0;
        $(trackView.canvas).mousedown(function(e) {
            var canvasCoords = igv.translateMouseCoordinates(e, trackView.canvas);
            igv.popover && igv.popover.hide(),
            isMouseDown = !0,
            lastMouseX = canvasCoords.x,
            mouseDownX = lastMouseX
        }),
        $(trackView.canvas).mouseup(function(e) {
            e = $.event.fix(e);
            var canvasCoords = igv.translateMouseCoordinates(e, trackView.canvas)
              , referenceFrame = trackView.browser.referenceFrame
              , genomicLocation = Math.floor(referenceFrame.start + referenceFrame.toBP(canvasCoords.x));
            if (referenceFrame) {
                if (popupTimer)
                    console.log("Cancel timer"),
                    window.clearTimeout(popupTimer),
                    popupTimer = void 0;
                else if (e.shiftKey)
                    trackView.track.shiftClick && trackView.tile && trackView.track.shiftClick(genomicLocation, e);
                else if (e.altKey)
                    trackView.track.altClick && trackView.tile && trackView.track.altClick(genomicLocation, e);
                else if (Math.abs(canvasCoords.x - mouseDownX) <= igv.constants.dragThreshold && trackView.track.popupData) {
                    const doubleClickDelay = 300;
                    popupTimer = window.setTimeout(function() {
                        var popupData, xOrigin;
                        void 0 !== genomicLocation && null  !== trackView.tile && (xOrigin = Math.round(referenceFrame.toPixels(trackView.tile.startBP - referenceFrame.start)),
                        popupData = trackView.track.popupData(genomicLocation, canvasCoords.x - xOrigin, canvasCoords.y),
                        popupData && popupData.length > 0 && igv.popover.presentTrackPopup(e.pageX, e.pageY, igv.formatPopoverText(popupData)),
                        mouseDownX = void 0,
                        popupTimer = void 0)
                    }, doubleClickDelay)
                }
                mouseDownX = void 0,
                isMouseDown = !1,
                lastMouseX = void 0
            }
        })
    }
    return igv.TrackView = function(track, browser) {
        function isTrackDraggable(track) {
            return !(track instanceof igv.RulerTrack)
        }
        function makeTrackDraggable(track) {
            self.igvTrackDragScrim = $('<div class="igv-track-drag-scrim">')[0],
            $(self.viewportDiv).append(self.igvTrackDragScrim),
            $(self.igvTrackDragScrim).hide(),
            self.igvTrackManipulationHandle = $('<div class="igv-track-manipulation-handle">')[0],
            $(self.trackDiv).append(self.igvTrackManipulationHandle),
            $(self.igvTrackManipulationHandle).mousedown(function(e) {
                self.isMouseDown = !0,
                igv.browser.dragTrackView = self
            }),
            $(self.igvTrackManipulationHandle).mouseup(function(e) {
                self.isMouseDown = void 0
            }),
            $(self.igvTrackManipulationHandle).mouseenter(function(e) {
                self.isMouseIn = !0,
                igv.browser.dragTargetTrackView = self,
                void 0 === igv.browser.dragTrackView ? $(self.igvTrackDragScrim).show() : self === igv.browser.dragTrackView && $(self.igvTrackDragScrim).show(),
                igv.browser.dragTargetTrackView && igv.browser.dragTrackView && igv.browser.dragTargetTrackView !== igv.browser.dragTrackView && (igv.browser.dragTargetTrackView.track.order < igv.browser.dragTrackView.track.order ? (igv.browser.dragTrackView.track.order = igv.browser.dragTargetTrackView.track.order,
                igv.browser.dragTargetTrackView.track.order = 1 + igv.browser.dragTrackView.track.order) : (igv.browser.dragTrackView.track.order = igv.browser.dragTargetTrackView.track.order,
                igv.browser.dragTargetTrackView.track.order = igv.browser.dragTrackView.track.order - 1),
                igv.browser.reorderTracks())
            }),
            $(self.igvTrackManipulationHandle).mouseleave(function(e) {
                self.isMouseIn = void 0,
                igv.browser.dragTargetTrackView = void 0,
                self !== igv.browser.dragTrackView && $(self.igvTrackDragScrim).hide()
            })
        }
        var self = this;
        this.track = track,
        this.browser = browser,
        "CURSOR" === browser.type ? (this.cursorTrackContainer = $('<div class="igv-cursor-track-container">')[0],
        $(browser.trackContainerDiv).append(this.cursorTrackContainer),
        this.trackDiv = $('<div class="igv-track-div">')[0],
        $(this.cursorTrackContainer).append(this.trackDiv)) : (this.trackDiv = $('<div class="igv-track-div">')[0],
        $(browser.trackContainerDiv).append(this.trackDiv)),
        track.height && (this.trackDiv.style.height = track.height + "px"),
        "CURSOR" !== browser.type && this.trackDiv.appendChild(igv.spinner()),
        this.addLeftHandGutterToParentTrackDiv(this.trackDiv),
        this.addViewportToParentTrackDiv(this.trackDiv),
        "CURSOR" === browser.type && (this.cursorHistogramContainer = $('<div class="igv-cursor-histogram-container">')[0],
        $(this.trackDiv).append(this.cursorHistogramContainer),
        this.track.cursorHistogram = new cursor.CursorHistogram(this.cursorHistogramContainer,this.track)),
        this.addRightHandGutterToParentTrackDiv(this.trackDiv),
        "CURSOR" !== browser.type && isTrackDraggable(this.track) && makeTrackDraggable(this.track),
        this.track instanceof igv.RulerTrack ? (this.trackDiv.dataset.rulerTrack = "rulerTrack",
        this.rulerSweeper = $('<div class="igv-ruler-sweeper-div">'),
        $(this.contentDiv).append(this.rulerSweeper[0]),
        addRulerTrackHandlers(this)) : addTrackHandlers(this)
    }
    ,
    igv.TrackView.prototype.setDataRange = function(min, max, logScale) {
        console.log("set track data range min " + min + " max " + max + " logScale " + (!0 === logScale ? "yes" : "no"))
    }
    ,
    igv.TrackView.prototype.addViewportToParentTrackDiv = function(trackDiv) {
        this.viewportDiv = $('<div class="igv-viewport-div">')[0],
        $(trackDiv).append(this.viewportDiv),
        this.contentDiv = $('<div class="igv-content-div">')[0],
        $(this.viewportDiv).append(this.contentDiv),
        this.canvas = $('<canvas class = "igv-content-canvas">')[0],
        $(this.contentDiv).append(this.canvas),
        this.canvas.setAttribute("width", this.contentDiv.clientWidth),
        this.canvas.setAttribute("height", this.contentDiv.clientHeight),
        this.ctx = this.canvas.getContext("2d"),
        "hidden" === $(this.viewportDiv).css("overflow-y") && (this.scrollbar = new TrackScrollbar(this.viewportDiv,this.contentDiv),
        this.scrollbar.update(),
        $(this.viewportDiv).append(this.scrollbar.outerScrollDiv)),
        this.viewportCreationHelper(this.viewportDiv)
    }
    ,
    igv.TrackView.prototype.viewportCreationHelper = function(viewportDiv) {
        var trackIconContainer, description;
        "CURSOR" !== this.browser.type && this.track.name && (trackIconContainer = $('<div class="igv-app-icon-container">'),
        $(viewportDiv).append(trackIconContainer[0]),
        this.track.labelSpan = $('<span class="igv-track-label-span-base">')[0],
        this.track.labelSpan.innerHTML = this.track.name,
        $(trackIconContainer).append(this.track.labelSpan),
        description = this.track.description || this.track.name,
        this.track.labelSpan.onclick = function(e) {
            igv.popover.presentTrackPopup(e.pageX, e.pageY, description)
        }
        ,
        $(viewportDiv).scroll(function() {
            trackIconContainer.css({
                top: $(viewportDiv).scrollTop() + "px"
            })
        }))
    }
    ,
    igv.TrackView.prototype.addLeftHandGutterToParentTrackDiv = function(trackDiv) {
        this.leftHandGutter = $('<div class="igv-left-hand-gutter">')[0],
        $(trackDiv).append(this.leftHandGutter),
        this.leftHandGutterCreationHelper(this.leftHandGutter)
    }
    ,
    igv.TrackView.prototype.leftHandGutterCreationHelper = function(leftHandGutter) {
        this.track.paintAxis && (this.controlCanvas = $('<canvas class ="igv-track-control-canvas">')[0],
        $(leftHandGutter).append(this.controlCanvas),
        this.controlCanvas.setAttribute("width", leftHandGutter.clientWidth),
        this.controlCanvas.setAttribute("height", leftHandGutter.clientHeight),
        this.controlCtx = this.controlCanvas.getContext("2d"))
    }
    ,
    igv.TrackView.prototype.addRightHandGutterToParentTrackDiv = function(trackDiv) {
        this.rightHandGutter = $('<div class="igv-right-hand-gutter">')[0],
        $(trackDiv).append(this.rightHandGutter),
        this.rightHandGutterCreationHelper($(this.rightHandGutter))
    }
    ,
    igv.TrackView.prototype.rightHandGutterCreationHelper = function(parent) {
        var gearButton, myself = this;
        this.track.ignoreTrackMenu || (gearButton = $('<i class="fa fa-gear fa-20px igv-track-menu-gear igv-app-icon">'),
        $(parent).append(gearButton[0]),
        $(gearButton).click(function(e) {
            igv.popover.presentTrackMenu(e.pageX, e.pageY, myself)
        }))
    }
    ,
    igv.TrackView.prototype.resize = function() {
        var canvas = this.canvas
          , contentDiv = this.contentDiv
          , contentWidth = this.viewportDiv.clientWidth;
        contentWidth > 0 && (contentDiv.style.width = contentWidth + "px",
        canvas.style.width = contentWidth + "px",
        canvas.setAttribute("width", contentWidth),
        this.update())
    }
    ,
    igv.TrackView.prototype.setTrackHeight = function(newHeight, update) {
        setTrackHeight_.call(this, newHeight, update || !0)
    }
    ,
    igv.TrackView.prototype.setContentHeight = function(newHeight) {
        var contentHeightStr = newHeight + "px";
        this.contentDiv.style.height = contentHeightStr,
        this.track.autoHeight ? setTrackHeight_.call(this, newHeight, !1) : (this.trackDiv.clientHeight > newHeight && (this.trackDiv.style.height = contentHeightStr),
        this.canvas.setAttribute("height", this.canvas.clientHeight),
        this.track.paintAxis && (this.controlCanvas.style.height = contentHeightStr,
        this.controlCanvas.setAttribute("height", newHeight))),
        this.scrollbar && this.scrollbar.update()
    }
    ,
    igv.TrackView.prototype.update = function() {
        this.tile = null ,
        this.scrollbar && this.scrollbar.update(),
        this.repaint()
    }
    ,
    igv.TrackView.prototype.repaint = function() {
        function hasCachedImaged(chr, start, end, bpPerPixel) {
            return this.tile && this.tile.containsRange(chr, start, end, bpPerPixel)
        }
        function viewIsReady() {
            return this.track && this.browser && this.browser.referenceFrame
        }
        function isNotIndexed(track) {
            return track.featureSource && track.featureSource.indexed === !1
        }
        if (viewIsReady.call(this)) {
            var pixelWidth, bpWidth, bpStart, bpEnd, ctx, success, self = this, referenceFrame = this.browser.referenceFrame, chr = referenceFrame.chr, refFrameStart = referenceFrame.start, refFrameEnd = refFrameStart + referenceFrame.toBP(this.canvas.width);
            hasCachedImaged.call(this, chr, refFrameStart, refFrameEnd, referenceFrame.bpPerPixel) || this.currentLoadTask && (isNotIndexed(this.track) || this.currentLoadTask.end >= refFrameEnd && this.currentLoadTask.start <= refFrameStart) || (this.currentLoadTask && this.currentLoadTask.abort(),
            pixelWidth = 3 * this.canvas.width,
            bpWidth = Math.round(referenceFrame.toBP(pixelWidth)),
            bpStart = Math.max(0, Math.round(referenceFrame.start - bpWidth / 3)),
            bpEnd = bpStart + bpWidth,
            success = function(features) {
                if (igv.stopSpinnerAtParentElement(self.trackDiv),
                self.currentLoadTask = void 0,
                features) {
                    if (self.track.computePixelHeight) {
                        var requiredHeight = self.track.computePixelHeight(features);
                        requiredHeight != self.contentDiv.clientHeight && self.setContentHeight(requiredHeight)
                    }
                    var buffer = document.createElement("canvas");
                    if (buffer.width = pixelWidth,
                    buffer.height = self.canvas.height,
                    ctx = buffer.getContext("2d"),
                    self.track.draw({
                        features: features,
                        context: ctx,
                        bpStart: bpStart,
                        bpPerPixel: referenceFrame.bpPerPixel,
                        pixelWidth: buffer.width,
                        pixelHeight: buffer.height
                    }),
                    self.track.paintAxis) {
                        var buffer2 = document.createElement("canvas");
                        buffer2.width = self.controlCanvas.width,
                        buffer2.height = self.controlCanvas.height;
                        var ctx2 = buffer2.getContext("2d");
                        self.track.paintAxis(ctx2, buffer2.width, buffer2.height),
                        self.controlCtx.drawImage(buffer2, 0, 0)
                    }
                    self.tile = new Tile(referenceFrame.chr,bpStart,bpEnd,referenceFrame.bpPerPixel,buffer),
                    self.paintImage(),
                    // GMB: Add function to update the gutter range
                    self.updateGutterRange()
                    // end GMB addition
                }
            }
            ,
            this.currentLoadTask = {
                start: bpStart,
                end: bpEnd,
                abort: function() {
                    this.canceled = !0,
                    this.xhrRequest && this.xhrRequest.abort(),
                    self.currentLoadTask = void 0
                }
            },
            igv.startSpinnerAtParentElement(self.trackDiv),
            this.track.getFeatures(referenceFrame.chr, bpStart, bpEnd, success, self.currentLoadTask)),
            this.tile && this.tile.overlapsRange(referenceFrame.chr, refFrameStart, refFrameEnd) ? this.paintImage() : this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        }
    }
    ,
    // GMB: Update the gutter range when the track is redrawn (e.g. zooming)
    igv.TrackView.prototype.updateGutterRange = function() {
        if( $(this.leftHandGutter).hasClass("gutter-range") ) {
            var dr = this.track.dataRange;
            $(this.leftHandGutter).empty().
                append("<div class='gutter-range-max'>" + Math.round(dr.max*100)/100 + "</div>").
                append("<div class='gutter-range-min'>" + Math.round(dr.min*100)/100 + "</div>");
        }
    }
    // end GMB addition
    ,
    Tile.prototype.containsRange = function(chr, start, end, scale) {
        return this.scale === scale && start >= this.startBP && end <= this.endBP && chr === this.chr
    }
    ,
    Tile.prototype.overlapsRange = function(chr, start, end) {
        return this.chr === chr && this.endBP >= start && this.startBP <= end
    }
    ,
    igv.TrackView.prototype.paintImage = function() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height),
        this.tile && (this.xOffset = Math.round(this.browser.referenceFrame.toPixels(this.tile.startBP - this.browser.referenceFrame.start)),
        this.ctx.drawImage(this.tile.image, this.xOffset, 0),
        this.ctx.save(),
        this.ctx.restore())
    }
    ,
    TrackScrollbar = function(viewportDiv, contentDiv) {
        function mouseMove(event) {
            moveScrollerTo(event.pageY - offY),
            event.stopPropagation()
        }
        function mouseUp(event) {
            $(window).off("mousemove .igv", null , mouseMove),
            $(window).off("mouseup .igv", null , mouseUp)
        }
        function moveScrollerTo(y) {
            var H = $(outerScrollDiv).height()
              , h = $(innerScrollDiv).height();
            newTop = Math.min(Math.max(0, y), H - h),
            contentTop = -Math.round(newTop * ($(contentDiv).height() / $(viewportDiv).height())),
            $(innerScrollDiv).css("top", newTop + "px"),
            $(contentDiv).css("top", contentTop + "px")
        }
        var offY, outerScrollDiv = $('<div class="igv-scrollbar-outer-div">')[0], innerScrollDiv = $('<div class="igv-scrollbar-inner-div">')[0];
        $(outerScrollDiv).append(innerScrollDiv),
        this.viewportDiv = viewportDiv,
        this.contentDiv = contentDiv,
        this.outerScrollDiv = outerScrollDiv,
        this.innerScrollDiv = innerScrollDiv,
        $(this.innerScrollDiv).mousedown(function(event) {
            offY = event.pageY - $(innerScrollDiv).position().top,
            $(window).on("mousemove .igv", null , null , mouseMove),
            $(window).on("mouseup .igv", null , null , mouseUp),
            event.stopPropagation()
        }),
        $(this.innerScrollDiv).click(function(event) {
            event.stopPropagation()
        }),
        $(this.outerScrollDiv).click(function(event) {
            moveScrollerTo(event.offsetY - $(innerScrollDiv).height() / 2),
            event.stopPropagation()
        }),
        $(this.viewportDiv).mousewheel(function(event) {
            var ratio = $(viewportDiv).height() / $(contentDiv).height();
            if (1 > ratio) {
                var dist = Math.round(ratio * event.deltaY * event.deltaFactor)
                  , newY = $(innerScrollDiv).position().top + dist;
                moveScrollerTo(newY)
            }
        })
    }
    ,
    TrackScrollbar.prototype.update = function() {
        var viewportHeight = $(this.viewportDiv).height()
          , contentHeight = $(this.contentDiv).height()
          , newInnerHeight = Math.round(viewportHeight / contentHeight * viewportHeight);
        contentHeight > viewportHeight ? ($(this.outerScrollDiv).show(),
        $(this.innerScrollDiv).height(newInnerHeight)) : $(this.outerScrollDiv).hide()
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    return igv.UserFeedback = function(parentObject) {
        var myself = this;
        this.userFeedback = $('<div class="igvUserFeedback">'),
        parentObject.append(this.userFeedback[0]),
        this.userFeedbackHeader = $('<div class="igvUserFeedbackHeader">'),
        this.userFeedback.append(this.userFeedbackHeader[0]),
        this.userFeedbackAlert = $('<i class="fa fa-exclamation-triangle fa-20px igvUserFeedbackAlert">'),
        this.userFeedbackHeader.append(this.userFeedbackAlert[0]),
        this.userFeedbackDismiss = $('<i class="fa fa-times-circle fa-20px igvUserFeedbackDismiss">'),
        this.userFeedbackHeader.append(this.userFeedbackDismiss[0]),
        this.userFeedbackDismiss.click(function() {
            myself.userFeedbackBodyCopy.html(""),
            myself.userFeedback.hide()
        }),
        this.userFeedbackBodyCopy = $('<div class="igvUserFeedbackBodyCopy">'),
        this.userFeedback.append(this.userFeedbackBodyCopy[0])
    }
    ,
    igv.UserFeedback.prototype.show = function() {
        this.userFeedback.show()
    }
    ,
    igv.UserFeedback.prototype.hide = function() {
        this.userFeedback.hide()
    }
    ,
    igv.UserFeedback.prototype.bodyCopy = function(htmlString) {
        this.userFeedbackBodyCopy.html(htmlString)
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    function computeStart(variant) {
        altTokens = variant.alt.split(","),
        altTokens.length > 0 ? (variant.alleles = [],
        variant.alleles.push(variant.ref),
        variant.start = Number.MAX_VALUE,
        variant.end = 0,
        altTokens.forEach(function(alt) {
            var s, e, diff;
            variant.alleles.push(alt),
            alt.length > 0 && (diff = variant.ref.length - alt.length,
            diff > 0 ? (s = variant.pos + alt.length,
            e = s + diff) : 0 > diff ? (s = variant.pos + variant.ref.length,
            e = s + 1) : (s = variant.pos,
            e = s + alt.length),
            variant.start = Math.min(variant.start, s),
            variant.end = Math.max(variant.end, e))
        })) : (variant.start = variant.pos - 1,
        variant.end = variant.pos)
    }
    return igv.createVCFVariant = function(tokens) {
        var variant = new igv.Variant;
        return variant.chr = tokens[0],
        variant.pos = parseInt(tokens[1]) - 1,
        variant.names = tokens[2],
        variant.ref = tokens[3],
        variant.alt = tokens[4],
        variant.qual = parseInt(tokens[5]),
        variant.filter = tokens[6],
        variant.info = tokens[7],
        computeStart(variant),
        variant
    }
    ,
    igv.createGAVariant = function(json) {
        function arrayToCommaString(array) {
            if (array) {
                var i, str = "";
                for (array.length > 0 && (str = array[0]),
                i = 1; i < array.length; i++)
                    str += ", " + array[1];
                return str
            }
        }
        var variant = new igv.Variant;
        return variant.chr = json.referenceName,
        variant.pos = parseInt(json.start),
        variant.names = arrayToCommaString(json.names),
        variant.ref = json.referenceBases + "",
        variant.alt = json.alternateBases + "",
        variant.qual = json.quality,
        variant.filter = arrayToCommaString(json.filter),
        variant.info = json.info,
        variant.calls = json.calls,
        computeStart(variant),
        variant
    }
    ,
    igv.Variant = function() {}
    ,
    igv.Variant.prototype.popupData = function(genomicLocation) {
        var fields, gt;
        return fields = [{
            name: "Names",
            value: this.names ? this.names : ""
        }, {
            name: "Ref",
            value: this.ref
        }, {
            name: "Alt",
            value: this.alt
        }, {
            name: "Qual",
            value: this.qual
        }, {
            name: "Filter",
            value: this.filter
        }],
        this.calls && 1 === this.calls.length && (gt = this.alleles[this.calls[0].genotype[0]] + this.alleles[this.calls[0].genotype[1]],
        fields.push({
            name: "Genotype",
            value: gt
        })),
        fields
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    function Variant(tokens) {
        var altTokens, self = this;
        this.chr = tokens[0],
        this.pos = parseInt(tokens[1]),
        this.names = tokens[2],
        this.ref = tokens[3],
        this.alt = tokens[4],
        this.qual = parseInt(tokens[5]),
        this.filter = tokens[6],
        this.info = tokens[7],
        altTokens = this.alt.split(","),
        altTokens.length > 0 ? (this.alleles = [],
        this.start = Number.MAX_VALUE,
        this.end = 0,
        altTokens.forEach(function(alt) {
            var s, e, diff;
            alt.length > 0 && (diff = self.ref.length - alt.length,
            diff > 0 ? (s = self.pos - 1 + alt.length,
            e = s + diff) : 0 > diff ? (s = self.pos - 1 + self.ref.length,
            e = s + 1) : (s = self.pos - 1,
            e = s + alt.length),
            self.alleles.push({
                allele: alt,
                start: s,
                end: e
            }),
            self.start = Math.min(self.start, s),
            self.end = Math.max(self.end, e))
        })) : (this.start = this.pos - 1,
        this.end = this.pos)
    }
    return igv.VcfParser = function() {}
    ,
    igv.VcfParser.prototype.parseHeader = function(data) {
        var line, i, tokens, id, values, ltIdx, gtIdx, type, lines = data.splitLines(), len = lines.length, header = {};
        if (this.header = header,
        !lines[0].startsWith("##fileformat"))
            throw new Error("Invalid VCF file: missing fileformat line");
        for (header.version = lines[0].substr(13),
        i = 1; len > i && (line = lines[i].trim(),
        line.startsWith("#")); i++)
            if (id = null ,
            values = {},
            line.startsWith("##")) {
                if (line.startsWith("##INFO") || line.startsWith("##FILTER") || line.startsWith("##FORMAT")) {
                    if (ltIdx = line.indexOf("<"),
                    gtIdx = line.lastIndexOf(">"),
                    !(ltIdx > 2 && gtIdx > 0)) {
                        console.log("Malformed VCF header line: " + line);
                        continue
                    }
                    type = line.substring(2, ltIdx - 1),
                    header[type] || (header[type] = {}),
                    tokens = igv.splitStringRespectingQuotes(line.substring(ltIdx + 1, gtIdx - 1), ","),
                    tokens.forEach(function(token) {
                        var kv = token.split("=");
                        kv.length > 1 && ("ID" === kv[0] ? id = kv[1] : values[kv[0]] = kv[1])
                    }),
                    id && (header[type][id] = values)
                }
            } else
                line.startsWith("#CHROM");
        return header
    }
    ,
    igv.VcfParser.prototype.parseFeatures = function(data) {
        function decode(tokens) {
            return tokens.length < 8 ? null  : new Variant(tokens)
        }
        var tokens, allFeatures, line, i, variant, lines = data.split("\n"), len = lines.length;
        for (allFeatures = [],
        i = 0; len > i; i++)
            line = lines[i],
            line.startsWith("#") || (tokens = lines[i].split("	"),
            variant = decode(tokens),
            null  != variant && (variant.header = this.header,
            allFeatures.push(variant)));
        return allFeatures
    }
    ,
    Variant.prototype.popupData = function(genomicLocation) {
        var fields, infoFields;
        return fields = [{
            name: "Names",
            value: this.names
        }, {
            name: "Ref",
            value: this.ref
        }, {
            name: "Alt",
            value: this.alt
        }, {
            name: "Qual",
            value: this.qual
        }, {
            name: "Filter",
            value: this.filter
        }, "<hr>"],
        infoFields = this.info.split(";"),
        infoFields.forEach(function(f) {
            var tokens = f.split("=");
            tokens.length > 1 && fields.push({
                name: tokens[0],
                value: tokens[1]
            })
        }),
        fields
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    function autoscale(features) {
        var min = 0
          , max = -Number.MAX_VALUE;
        return features.forEach(function(f) {
            min = Math.min(min, f.value),
            max = Math.max(max, f.value)
        }),
        {
            min: min,
            max: max
        }
    }
    function signsDiffer(a, b) {
        return a > 0 && 0 > b || 0 > a && b > 0
    }
    return igv.WIGTrack = function(config) {
        this.config = config,
        this.url = config.url,
        config.format || igv.inferTypes(config),
        "bigwig" === config.format ? this.featureSource = new igv.BWSource(config) : this.featureSource = new igv.FeatureSource(config),
        this.name = config.name,
        this.id = config.id || this.name,
        this.color = config.color || "rgb(150,150,150)",
        this.height = 100,
        this.order = config.order,
        this.min = config.min,
        this.max = config.max
    }
    ,
    igv.WIGTrack.prototype.getFeatures = function(chr, bpStart, bpEnd, continuation, task) {
        this.featureSource.getFeatures(chr, bpStart, bpEnd, continuation, task)
    }
    ,
    igv.WIGTrack.prototype.popupMenuItems = function(popover) {
        var menuItems = [];
        return menuItems.push(igv.colorPickerMenuItem(popover, this.trackView)),
        menuItems.push(igv.dataRangeMenuItem(popover, this.trackView)),
        menuItems
    }
    ,
    igv.WIGTrack.prototype.draw = function(options) {
        function renderFeature(feature, index, featureList) {
            var yUnitless, heightUnitLess, x, width, rectEnd;
            feature.end < bpStart || feature.start > bpEnd || (x = Math.floor((feature.start - bpStart) / bpPerPixel),
            rectEnd = Math.ceil((feature.end - bpStart) / bpPerPixel),
            width = Math.max(1, rectEnd - x),
            signsDiffer(featureValueMinimum, featureValueMaximum) ? feature.value < 0 ? (yUnitless = featureValueMaximum / featureValueRange,
            heightUnitLess = -feature.value / featureValueRange) : (yUnitless = (featureValueMaximum - feature.value) / featureValueRange,
            heightUnitLess = feature.value / featureValueRange) : 0 > featureValueMinimum ? (yUnitless = 0,
            heightUnitLess = -feature.value / featureValueRange) : (yUnitless = 1 - feature.value / featureValueRange,
            heightUnitLess = feature.value / featureValueRange),
            igv.graphics.fillRect(ctx, x, yUnitless * pixelHeight, width, heightUnitLess * pixelHeight, {
                fillStyle: track.color
            }))
        }
        var featureValueMinimum, featureValueMaximum, featureValueRange, track = this, features = options.features, ctx = options.context, bpPerPixel = options.bpPerPixel, bpStart = options.bpStart, pixelWidth = options.pixelWidth, pixelHeight = options.pixelHeight, bpEnd = bpStart + pixelWidth * bpPerPixel + 1;
        if (features && features.length > 0) {
            if (void 0 === track.max) {
                var s = autoscale(features);
                featureValueMinimum = s.min,
                featureValueMaximum = s.max
            } else
                featureValueMinimum = void 0 === track.min ? 0 : track.min,
                featureValueMaximum = track.max;
            featureValueRange = featureValueMaximum - featureValueMinimum,
            track.dataRange = {
                min: featureValueMinimum,
                max: featureValueMaximum
            },
            features.forEach(renderFeature)
        }
    }
    ,
    igv
}(igv || {})
  , igv = function(igv) {
    return igv.WindowSizePanel = function(parentObject) {
        this.contentDiv = $('<div class="igv-windowsizepanel-content-div"></div>'),
        parentObject.append(this.contentDiv[0])
    }
    ,
    igv.WindowSizePanel.prototype.update = function(size) {
        function prettyNumber(size) {
            return size > 1e7 ? (denom = 1e6,
            units = " mb",
            value = size / denom,
            floored = Math.floor(value),
            floored.toString() + units) : size > 1e4 ? (denom = 1e3,
            units = " kb",
            value = size / denom,
            floored = Math.floor(value),
            igv.numberFormatter(floored) + units) : igv.numberFormatter(size) + " bp"
        }
        var value, floored, denom, units;
        this.contentDiv.text(prettyNumber(size))
    }
    ,
    igv
}(igv || {})
  , MAX_WBITS = 15
  , DEF_WBITS = MAX_WBITS
  , MAX_MEM_LEVEL = 9
  , MANY = 1440
  , BMAX = 15
  , PRESET_DICT = 32
  , Z_NO_FLUSH = 0
  , Z_PARTIAL_FLUSH = 1
  , Z_SYNC_FLUSH = 2
  , Z_FULL_FLUSH = 3
  , Z_FINISH = 4
  , Z_DEFLATED = 8
  , Z_OK = 0
  , Z_STREAM_END = 1
  , Z_NEED_DICT = 2
  , Z_ERRNO = -1
  , Z_STREAM_ERROR = -2
  , Z_DATA_ERROR = -3
  , Z_MEM_ERROR = -4
  , Z_BUF_ERROR = -5
  , Z_VERSION_ERROR = -6
  , METHOD = 0
  , FLAG = 1
  , DICT4 = 2
  , DICT3 = 3
  , DICT2 = 4
  , DICT1 = 5
  , DICT0 = 6
  , BLOCKS = 7
  , CHECK4 = 8
  , CHECK3 = 9
  , CHECK2 = 10
  , CHECK1 = 11
  , DONE = 12
  , BAD = 13
  , inflate_mask = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535]
  , IB_TYPE = 0
  , IB_LENS = 1
  , IB_STORED = 2
  , IB_TABLE = 3
  , IB_BTREE = 4
  , IB_DTREE = 5
  , IB_CODES = 6
  , IB_DRY = 7
  , IB_DONE = 8
  , IB_BAD = 9
  , fixed_bl = 9
  , fixed_bd = 5
  , fixed_tl = [96, 7, 256, 0, 8, 80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8, 112, 0, 8, 48, 0, 9, 192, 80, 7, 10, 0, 8, 96, 0, 8, 32, 0, 9, 160, 0, 8, 0, 0, 8, 128, 0, 8, 64, 0, 9, 224, 80, 7, 6, 0, 8, 88, 0, 8, 24, 0, 9, 144, 83, 7, 59, 0, 8, 120, 0, 8, 56, 0, 9, 208, 81, 7, 17, 0, 8, 104, 0, 8, 40, 0, 9, 176, 0, 8, 8, 0, 8, 136, 0, 8, 72, 0, 9, 240, 80, 7, 4, 0, 8, 84, 0, 8, 20, 85, 8, 227, 83, 7, 43, 0, 8, 116, 0, 8, 52, 0, 9, 200, 81, 7, 13, 0, 8, 100, 0, 8, 36, 0, 9, 168, 0, 8, 4, 0, 8, 132, 0, 8, 68, 0, 9, 232, 80, 7, 8, 0, 8, 92, 0, 8, 28, 0, 9, 152, 84, 7, 83, 0, 8, 124, 0, 8, 60, 0, 9, 216, 82, 7, 23, 0, 8, 108, 0, 8, 44, 0, 9, 184, 0, 8, 12, 0, 8, 140, 0, 8, 76, 0, 9, 248, 80, 7, 3, 0, 8, 82, 0, 8, 18, 85, 8, 163, 83, 7, 35, 0, 8, 114, 0, 8, 50, 0, 9, 196, 81, 7, 11, 0, 8, 98, 0, 8, 34, 0, 9, 164, 0, 8, 2, 0, 8, 130, 0, 8, 66, 0, 9, 228, 80, 7, 7, 0, 8, 90, 0, 8, 26, 0, 9, 148, 84, 7, 67, 0, 8, 122, 0, 8, 58, 0, 9, 212, 82, 7, 19, 0, 8, 106, 0, 8, 42, 0, 9, 180, 0, 8, 10, 0, 8, 138, 0, 8, 74, 0, 9, 244, 80, 7, 5, 0, 8, 86, 0, 8, 22, 192, 8, 0, 83, 7, 51, 0, 8, 118, 0, 8, 54, 0, 9, 204, 81, 7, 15, 0, 8, 102, 0, 8, 38, 0, 9, 172, 0, 8, 6, 0, 8, 134, 0, 8, 70, 0, 9, 236, 80, 7, 9, 0, 8, 94, 0, 8, 30, 0, 9, 156, 84, 7, 99, 0, 8, 126, 0, 8, 62, 0, 9, 220, 82, 7, 27, 0, 8, 110, 0, 8, 46, 0, 9, 188, 0, 8, 14, 0, 8, 142, 0, 8, 78, 0, 9, 252, 96, 7, 256, 0, 8, 81, 0, 8, 17, 85, 8, 131, 82, 7, 31, 0, 8, 113, 0, 8, 49, 0, 9, 194, 80, 7, 10, 0, 8, 97, 0, 8, 33, 0, 9, 162, 0, 8, 1, 0, 8, 129, 0, 8, 65, 0, 9, 226, 80, 7, 6, 0, 8, 89, 0, 8, 25, 0, 9, 146, 83, 7, 59, 0, 8, 121, 0, 8, 57, 0, 9, 210, 81, 7, 17, 0, 8, 105, 0, 8, 41, 0, 9, 178, 0, 8, 9, 0, 8, 137, 0, 8, 73, 0, 9, 242, 80, 7, 4, 0, 8, 85, 0, 8, 21, 80, 8, 258, 83, 7, 43, 0, 8, 117, 0, 8, 53, 0, 9, 202, 81, 7, 13, 0, 8, 101, 0, 8, 37, 0, 9, 170, 0, 8, 5, 0, 8, 133, 0, 8, 69, 0, 9, 234, 80, 7, 8, 0, 8, 93, 0, 8, 29, 0, 9, 154, 84, 7, 83, 0, 8, 125, 0, 8, 61, 0, 9, 218, 82, 7, 23, 0, 8, 109, 0, 8, 45, 0, 9, 186, 0, 8, 13, 0, 8, 141, 0, 8, 77, 0, 9, 250, 80, 7, 3, 0, 8, 83, 0, 8, 19, 85, 8, 195, 83, 7, 35, 0, 8, 115, 0, 8, 51, 0, 9, 198, 81, 7, 11, 0, 8, 99, 0, 8, 35, 0, 9, 166, 0, 8, 3, 0, 8, 131, 0, 8, 67, 0, 9, 230, 80, 7, 7, 0, 8, 91, 0, 8, 27, 0, 9, 150, 84, 7, 67, 0, 8, 123, 0, 8, 59, 0, 9, 214, 82, 7, 19, 0, 8, 107, 0, 8, 43, 0, 9, 182, 0, 8, 11, 0, 8, 139, 0, 8, 75, 0, 9, 246, 80, 7, 5, 0, 8, 87, 0, 8, 23, 192, 8, 0, 83, 7, 51, 0, 8, 119, 0, 8, 55, 0, 9, 206, 81, 7, 15, 0, 8, 103, 0, 8, 39, 0, 9, 174, 0, 8, 7, 0, 8, 135, 0, 8, 71, 0, 9, 238, 80, 7, 9, 0, 8, 95, 0, 8, 31, 0, 9, 158, 84, 7, 99, 0, 8, 127, 0, 8, 63, 0, 9, 222, 82, 7, 27, 0, 8, 111, 0, 8, 47, 0, 9, 190, 0, 8, 15, 0, 8, 143, 0, 8, 79, 0, 9, 254, 96, 7, 256, 0, 8, 80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8, 112, 0, 8, 48, 0, 9, 193, 80, 7, 10, 0, 8, 96, 0, 8, 32, 0, 9, 161, 0, 8, 0, 0, 8, 128, 0, 8, 64, 0, 9, 225, 80, 7, 6, 0, 8, 88, 0, 8, 24, 0, 9, 145, 83, 7, 59, 0, 8, 120, 0, 8, 56, 0, 9, 209, 81, 7, 17, 0, 8, 104, 0, 8, 40, 0, 9, 177, 0, 8, 8, 0, 8, 136, 0, 8, 72, 0, 9, 241, 80, 7, 4, 0, 8, 84, 0, 8, 20, 85, 8, 227, 83, 7, 43, 0, 8, 116, 0, 8, 52, 0, 9, 201, 81, 7, 13, 0, 8, 100, 0, 8, 36, 0, 9, 169, 0, 8, 4, 0, 8, 132, 0, 8, 68, 0, 9, 233, 80, 7, 8, 0, 8, 92, 0, 8, 28, 0, 9, 153, 84, 7, 83, 0, 8, 124, 0, 8, 60, 0, 9, 217, 82, 7, 23, 0, 8, 108, 0, 8, 44, 0, 9, 185, 0, 8, 12, 0, 8, 140, 0, 8, 76, 0, 9, 249, 80, 7, 3, 0, 8, 82, 0, 8, 18, 85, 8, 163, 83, 7, 35, 0, 8, 114, 0, 8, 50, 0, 9, 197, 81, 7, 11, 0, 8, 98, 0, 8, 34, 0, 9, 165, 0, 8, 2, 0, 8, 130, 0, 8, 66, 0, 9, 229, 80, 7, 7, 0, 8, 90, 0, 8, 26, 0, 9, 149, 84, 7, 67, 0, 8, 122, 0, 8, 58, 0, 9, 213, 82, 7, 19, 0, 8, 106, 0, 8, 42, 0, 9, 181, 0, 8, 10, 0, 8, 138, 0, 8, 74, 0, 9, 245, 80, 7, 5, 0, 8, 86, 0, 8, 22, 192, 8, 0, 83, 7, 51, 0, 8, 118, 0, 8, 54, 0, 9, 205, 81, 7, 15, 0, 8, 102, 0, 8, 38, 0, 9, 173, 0, 8, 6, 0, 8, 134, 0, 8, 70, 0, 9, 237, 80, 7, 9, 0, 8, 94, 0, 8, 30, 0, 9, 157, 84, 7, 99, 0, 8, 126, 0, 8, 62, 0, 9, 221, 82, 7, 27, 0, 8, 110, 0, 8, 46, 0, 9, 189, 0, 8, 14, 0, 8, 142, 0, 8, 78, 0, 9, 253, 96, 7, 256, 0, 8, 81, 0, 8, 17, 85, 8, 131, 82, 7, 31, 0, 8, 113, 0, 8, 49, 0, 9, 195, 80, 7, 10, 0, 8, 97, 0, 8, 33, 0, 9, 163, 0, 8, 1, 0, 8, 129, 0, 8, 65, 0, 9, 227, 80, 7, 6, 0, 8, 89, 0, 8, 25, 0, 9, 147, 83, 7, 59, 0, 8, 121, 0, 8, 57, 0, 9, 211, 81, 7, 17, 0, 8, 105, 0, 8, 41, 0, 9, 179, 0, 8, 9, 0, 8, 137, 0, 8, 73, 0, 9, 243, 80, 7, 4, 0, 8, 85, 0, 8, 21, 80, 8, 258, 83, 7, 43, 0, 8, 117, 0, 8, 53, 0, 9, 203, 81, 7, 13, 0, 8, 101, 0, 8, 37, 0, 9, 171, 0, 8, 5, 0, 8, 133, 0, 8, 69, 0, 9, 235, 80, 7, 8, 0, 8, 93, 0, 8, 29, 0, 9, 155, 84, 7, 83, 0, 8, 125, 0, 8, 61, 0, 9, 219, 82, 7, 23, 0, 8, 109, 0, 8, 45, 0, 9, 187, 0, 8, 13, 0, 8, 141, 0, 8, 77, 0, 9, 251, 80, 7, 3, 0, 8, 83, 0, 8, 19, 85, 8, 195, 83, 7, 35, 0, 8, 115, 0, 8, 51, 0, 9, 199, 81, 7, 11, 0, 8, 99, 0, 8, 35, 0, 9, 167, 0, 8, 3, 0, 8, 131, 0, 8, 67, 0, 9, 231, 80, 7, 7, 0, 8, 91, 0, 8, 27, 0, 9, 151, 84, 7, 67, 0, 8, 123, 0, 8, 59, 0, 9, 215, 82, 7, 19, 0, 8, 107, 0, 8, 43, 0, 9, 183, 0, 8, 11, 0, 8, 139, 0, 8, 75, 0, 9, 247, 80, 7, 5, 0, 8, 87, 0, 8, 23, 192, 8, 0, 83, 7, 51, 0, 8, 119, 0, 8, 55, 0, 9, 207, 81, 7, 15, 0, 8, 103, 0, 8, 39, 0, 9, 175, 0, 8, 7, 0, 8, 135, 0, 8, 71, 0, 9, 239, 80, 7, 9, 0, 8, 95, 0, 8, 31, 0, 9, 159, 84, 7, 99, 0, 8, 127, 0, 8, 63, 0, 9, 223, 82, 7, 27, 0, 8, 111, 0, 8, 47, 0, 9, 191, 0, 8, 15, 0, 8, 143, 0, 8, 79, 0, 9, 255]
  , fixed_td = [80, 5, 1, 87, 5, 257, 83, 5, 17, 91, 5, 4097, 81, 5, 5, 89, 5, 1025, 85, 5, 65, 93, 5, 16385, 80, 5, 3, 88, 5, 513, 84, 5, 33, 92, 5, 8193, 82, 5, 9, 90, 5, 2049, 86, 5, 129, 192, 5, 24577, 80, 5, 2, 87, 5, 385, 83, 5, 25, 91, 5, 6145, 81, 5, 7, 89, 5, 1537, 85, 5, 97, 93, 5, 24577, 80, 5, 4, 88, 5, 769, 84, 5, 49, 92, 5, 12289, 82, 5, 13, 90, 5, 3073, 86, 5, 193, 192, 5, 24577]
  , cplens = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]
  , cplext = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 112, 112]
  , cpdist = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577]
  , cpdext = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
ZStream.prototype.inflateInit = function(w, nowrap) {
    return w || (w = DEF_WBITS),
    nowrap && (nowrap = !1),
    this.istate = new Inflate,
    this.istate.inflateInit(this, nowrap ? -w : w)
}
,
ZStream.prototype.inflate = function(f) {
    return null  == this.istate ? Z_STREAM_ERROR : this.istate.inflate(this, f)
}
,
ZStream.prototype.inflateEnd = function() {
    if (null  == this.istate)
        return Z_STREAM_ERROR;
    var ret = istate.inflateEnd(this);
    return this.istate = null ,
    ret
}
,
ZStream.prototype.inflateSync = function() {
    return istate.inflateSync(this)
}
,
ZStream.prototype.inflateSetDictionary = function(dictionary, dictLength) {
    return istate.inflateSetDictionary(this, dictionary, dictLength)
}
,
Inflate.prototype.inflateReset = function(z) {
    return null  == z || null  == z.istate ? Z_STREAM_ERROR : (z.total_in = z.total_out = 0,
    z.msg = null ,
    z.istate.mode = 0 != z.istate.nowrap ? BLOCKS : METHOD,
    z.istate.blocks.reset(z, null ),
    Z_OK)
}
,
Inflate.prototype.inflateEnd = function(z) {
    return null  != this.blocks && this.blocks.free(z),
    this.blocks = null ,
    Z_OK
}
,
Inflate.prototype.inflateInit = function(z, w) {
    return z.msg = null ,
    this.blocks = null ,
    nowrap = 0,
    0 > w && (w = -w,
    nowrap = 1),
    8 > w || w > 15 ? (this.inflateEnd(z),
    Z_STREAM_ERROR) : (this.wbits = w,
    z.istate.blocks = new InfBlocks(z,0 != z.istate.nowrap ? null  : this,1 << w),
    this.inflateReset(z),
    Z_OK)
}
,
Inflate.prototype.inflate = function(z, f) {
    var r, b;
    if (null  == z || null  == z.istate || null  == z.next_in)
        return Z_STREAM_ERROR;
    for (f = f == Z_FINISH ? Z_BUF_ERROR : Z_OK,
    r = Z_BUF_ERROR; ; )
        switch (z.istate.mode) {
        case METHOD:
            if (0 == z.avail_in)
                return r;
            if (r = f,
            z.avail_in--,
            z.total_in++,
            (15 & (z.istate.method = z.next_in[z.next_in_index++])) != Z_DEFLATED) {
                z.istate.mode = BAD,
                z.msg = "unknown compression method",
                z.istate.marker = 5;
                break
            }
            if ((z.istate.method >> 4) + 8 > z.istate.wbits) {
                z.istate.mode = BAD,
                z.msg = "invalid window size",
                z.istate.marker = 5;
                break
            }
            z.istate.mode = FLAG;
        case FLAG:
            if (0 == z.avail_in)
                return r;
            if (r = f,
            z.avail_in--,
            z.total_in++,
            b = 255 & z.next_in[z.next_in_index++],
            ((z.istate.method << 8) + b) % 31 != 0) {
                z.istate.mode = BAD,
                z.msg = "incorrect header check",
                z.istate.marker = 5;
                break
            }
            if (0 == (b & PRESET_DICT)) {
                z.istate.mode = BLOCKS;
                break
            }
            z.istate.mode = DICT4;
        case DICT4:
            if (0 == z.avail_in)
                return r;
            r = f,
            z.avail_in--,
            z.total_in++,
            z.istate.need = (255 & z.next_in[z.next_in_index++]) << 24 & 4278190080,
            z.istate.mode = DICT3;
        case DICT3:
            if (0 == z.avail_in)
                return r;
            r = f,
            z.avail_in--,
            z.total_in++,
            z.istate.need += (255 & z.next_in[z.next_in_index++]) << 16 & 16711680,
            z.istate.mode = DICT2;
        case DICT2:
            if (0 == z.avail_in)
                return r;
            r = f,
            z.avail_in--,
            z.total_in++,
            z.istate.need += (255 & z.next_in[z.next_in_index++]) << 8 & 65280,
            z.istate.mode = DICT1;
        case DICT1:
            return 0 == z.avail_in ? r : (r = f,
            z.avail_in--,
            z.total_in++,
            z.istate.need += 255 & z.next_in[z.next_in_index++],
            z.adler = z.istate.need,
            z.istate.mode = DICT0,
            Z_NEED_DICT);
        case DICT0:
            return z.istate.mode = BAD,
            z.msg = "need dictionary",
            z.istate.marker = 0,
            Z_STREAM_ERROR;
        case BLOCKS:
            if (r = z.istate.blocks.proc(z, r),
            r == Z_DATA_ERROR) {
                z.istate.mode = BAD,
                z.istate.marker = 0;
                break
            }
            if (r == Z_OK && (r = f),
            r != Z_STREAM_END)
                return r;
            if (r = f,
            z.istate.blocks.reset(z, z.istate.was),
            0 != z.istate.nowrap) {
                z.istate.mode = DONE;
                break
            }
            z.istate.mode = CHECK4;
        case CHECK4:
            if (0 == z.avail_in)
                return r;
            r = f,
            z.avail_in--,
            z.total_in++,
            z.istate.need = (255 & z.next_in[z.next_in_index++]) << 24 & 4278190080,
            z.istate.mode = CHECK3;
        case CHECK3:
            if (0 == z.avail_in)
                return r;
            r = f,
            z.avail_in--,
            z.total_in++,
            z.istate.need += (255 & z.next_in[z.next_in_index++]) << 16 & 16711680,
            z.istate.mode = CHECK2;
        case CHECK2:
            if (0 == z.avail_in)
                return r;
            r = f,
            z.avail_in--,
            z.total_in++,
            z.istate.need += (255 & z.next_in[z.next_in_index++]) << 8 & 65280,
            z.istate.mode = CHECK1;
        case CHECK1:
            if (0 == z.avail_in)
                return r;
            if (r = f,
            z.avail_in--,
            z.total_in++,
            z.istate.need += 255 & z.next_in[z.next_in_index++],
            z.istate.was[0] != z.istate.need) {
                z.istate.mode = BAD,
                z.msg = "incorrect data check",
                z.istate.marker = 5;
                break
            }
            z.istate.mode = DONE;
        case DONE:
            return Z_STREAM_END;
        case BAD:
            return Z_DATA_ERROR;
        default:
            return Z_STREAM_ERROR
        }
}
,
Inflate.prototype.inflateSetDictionary = function(z, dictionary, dictLength) {
    var index = 0
      , length = dictLength;
    return null  == z || null  == z.istate || z.istate.mode != DICT0 ? Z_STREAM_ERROR : z._adler.adler32(1, dictionary, 0, dictLength) != z.adler ? Z_DATA_ERROR : (z.adler = z._adler.adler32(0, null , 0, 0),
    length >= 1 << z.istate.wbits && (length = (1 << z.istate.wbits) - 1,
    index = dictLength - length),
    z.istate.blocks.set_dictionary(dictionary, index, length),
    z.istate.mode = BLOCKS,
    Z_OK)
}
;
var mark = [0, 0, 255, 255];
Inflate.prototype.inflateSync = function(z) {
    var n, p, m, r, w;
    if (null  == z || null  == z.istate)
        return Z_STREAM_ERROR;
    if (z.istate.mode != BAD && (z.istate.mode = BAD,
    z.istate.marker = 0),
    0 == (n = z.avail_in))
        return Z_BUF_ERROR;
    for (p = z.next_in_index,
    m = z.istate.marker; 0 != n && 4 > m; )
        z.next_in[p] == mark[m] ? m++ : m = 0 != z.next_in[p] ? 0 : 4 - m,
        p++,
        n--;
    return z.total_in += p - z.next_in_index,
    z.next_in_index = p,
    z.avail_in = n,
    z.istate.marker = m,
    4 != m ? Z_DATA_ERROR : (r = z.total_in,
    w = z.total_out,
    this.inflateReset(z),
    z.total_in = r,
    z.total_out = w,
    z.istate.mode = BLOCKS,
    Z_OK)
}
,
Inflate.prototype.inflateSyncPoint = function(z) {
    return null  == z || null  == z.istate || null  == z.istate.blocks ? Z_STREAM_ERROR : z.istate.blocks.sync_point()
}
;
var INFBLOCKS_BORDER = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
InfBlocks.prototype.reset = function(z, c) {
    c && (c[0] = this.check),
    this.mode == IB_CODES && this.codes.free(z),
    this.mode = IB_TYPE,
    this.bitk = 0,
    this.bitb = 0,
    this.read = this.write = 0,
    this.checkfn && (z.adler = this.check = z._adler.adler32(0, null , 0, 0))
}
,
InfBlocks.prototype.proc = function(z, r) {
    var t, b, k, p, n, q, m;
    for (p = z.next_in_index,
    n = z.avail_in,
    b = this.bitb,
    k = this.bitk,
    q = this.write,
    m = q < this.read ? this.read - q - 1 : this.end - q; ; )
        switch (this.mode) {
        case IB_TYPE:
            for (; 3 > k; ) {
                if (0 == n)
                    return this.bitb = b,
                    this.bitk = k,
                    z.avail_in = n,
                    z.total_in += p - z.next_in_index,
                    z.next_in_index = p,
                    this.write = q,
                    this.inflate_flush(z, r);
                r = Z_OK,
                n--,
                b |= (255 & z.next_in[p++]) << k,
                k += 8
            }
            switch (t = 7 & b,
            this.last = 1 & t,
            t >>> 1) {
            case 0:
                b >>>= 3,
                k -= 3,
                t = 7 & k,
                b >>>= t,
                k -= t,
                this.mode = IB_LENS;
                break;
            case 1:
                var bl = new Int32Array(1)
                  , bd = new Int32Array(1)
                  , tl = []
                  , td = [];
                inflate_trees_fixed(bl, bd, tl, td, z),
                this.codes.init(bl[0], bd[0], tl[0], 0, td[0], 0, z),
                b >>>= 3,
                k -= 3,
                this.mode = IB_CODES;
                break;
            case 2:
                b >>>= 3,
                k -= 3,
                this.mode = IB_TABLE;
                break;
            case 3:
                return b >>>= 3,
                k -= 3,
                this.mode = BAD,
                z.msg = "invalid block type",
                r = Z_DATA_ERROR,
                this.bitb = b,
                this.bitk = k,
                z.avail_in = n,
                z.total_in += p - z.next_in_index,
                z.next_in_index = p,
                this.write = q,
                this.inflate_flush(z, r)
            }
            break;
        case IB_LENS:
            for (; 32 > k; ) {
                if (0 == n)
                    return this.bitb = b,
                    this.bitk = k,
                    z.avail_in = n,
                    z.total_in += p - z.next_in_index,
                    z.next_in_index = p,
                    this.write = q,
                    this.inflate_flush(z, r);
                r = Z_OK,
                n--,
                b |= (255 & z.next_in[p++]) << k,
                k += 8
            }
            if ((~b >>> 16 & 65535) != (65535 & b))
                return this.mode = BAD,
                z.msg = "invalid stored block lengths",
                r = Z_DATA_ERROR,
                this.bitb = b,
                this.bitk = k,
                z.avail_in = n,
                z.total_in += p - z.next_in_index,
                z.next_in_index = p,
                this.write = q,
                this.inflate_flush(z, r);
            this.left = 65535 & b,
            b = k = 0,
            this.mode = 0 != left ? IB_STORED : 0 != this.last ? IB_DRY : IB_TYPE;
            break;
        case IB_STORED:
            if (0 == n)
                return this.bitb = b,
                this.bitk = k,
                z.avail_in = n,
                z.total_in += p - z.next_in_index,
                z.next_in_index = p,
                write = q,
                this.inflate_flush(z, r);
            if (0 == m && (q == end && 0 != read && (q = 0,
            m = q < this.read ? this.read - q - 1 : this.end - q),
            0 == m && (this.write = q,
            r = this.inflate_flush(z, r),
            q = this.write,
            m = q < this.read ? this.read - q - 1 : this.end - q,
            q == this.end && 0 != this.read && (q = 0,
            m = q < this.read ? this.read - q - 1 : this.end - q),
            0 == m)))
                return this.bitb = b,
                this.bitk = k,
                z.avail_in = n,
                z.total_in += p - z.next_in_index,
                z.next_in_index = p,
                this.write = q,
                this.inflate_flush(z, r);
            if (r = Z_OK,
            t = this.left,
            t > n && (t = n),
            t > m && (t = m),
            arrayCopy(z.next_in, p, window, q, t),
            p += t,
            n -= t,
            q += t,
            m -= t,
            0 != (this.left -= t))
                break;
            this.mode = 0 != this.last ? IB_DRY : IB_TYPE;
            break;
        case IB_TABLE:
            for (; 14 > k; ) {
                if (0 == n)
                    return this.bitb = b,
                    this.bitk = k,
                    z.avail_in = n,
                    z.total_in += p - z.next_in_index,
                    z.next_in_index = p,
                    this.write = q,
                    this.inflate_flush(z, r);
                r = Z_OK,
                n--,
                b |= (255 & z.next_in[p++]) << k,
                k += 8
            }
            if (this.table = t = 16383 & b,
            (31 & t) > 29 || (t >> 5 & 31) > 29)
                return this.mode = IB_BAD,
                z.msg = "too many length or distance symbols",
                r = Z_DATA_ERROR,
                this.bitb = b,
                this.bitk = k,
                z.avail_in = n,
                z.total_in += p - z.next_in_index,
                z.next_in_index = p,
                this.write = q,
                this.inflate_flush(z, r);
            if (t = 258 + (31 & t) + (t >> 5 & 31),
            null  == this.blens || this.blens.length < t)
                this.blens = new Int32Array(t);
            else
                for (var i = 0; t > i; i++)
                    this.blens[i] = 0;
            b >>>= 14,
            k -= 14,
            this.index = 0,
            mode = IB_BTREE;
        case IB_BTREE:
            for (; this.index < 4 + (this.table >>> 10); ) {
                for (; 3 > k; ) {
                    if (0 == n)
                        return this.bitb = b,
                        this.bitk = k,
                        z.avail_in = n,
                        z.total_in += p - z.next_in_index,
                        z.next_in_index = p,
                        this.write = q,
                        this.inflate_flush(z, r);
                    r = Z_OK,
                    n--,
                    b |= (255 & z.next_in[p++]) << k,
                    k += 8
                }
                this.blens[INFBLOCKS_BORDER[this.index++]] = 7 & b,
                b >>>= 3,
                k -= 3
            }
            for (; this.index < 19; )
                this.blens[INFBLOCKS_BORDER[this.index++]] = 0;
            if (this.bb[0] = 7,
            t = this.inftree.inflate_trees_bits(this.blens, this.bb, this.tb, this.hufts, z),
            t != Z_OK)
                return r = t,
                r == Z_DATA_ERROR && (this.blens = null ,
                this.mode = IB_BAD),
                this.bitb = b,
                this.bitk = k,
                z.avail_in = n,
                z.total_in += p - z.next_in_index,
                z.next_in_index = p,
                write = q,
                this.inflate_flush(z, r);
            this.index = 0,
            this.mode = IB_DTREE;
        case IB_DTREE:
            for (; ; ) {
                if (t = this.table,
                !(this.index < 258 + (31 & t) + (t >> 5 & 31)))
                    break;
                var i, j, c;
                for (t = this.bb[0]; t > k; ) {
                    if (0 == n)
                        return this.bitb = b,
                        this.bitk = k,
                        z.avail_in = n,
                        z.total_in += p - z.next_in_index,
                        z.next_in_index = p,
                        this.write = q,
                        this.inflate_flush(z, r);
                    r = Z_OK,
                    n--,
                    b |= (255 & z.next_in[p++]) << k,
                    k += 8
                }
                if (t = this.hufts[3 * (this.tb[0] + (b & inflate_mask[t])) + 1],
                c = this.hufts[3 * (this.tb[0] + (b & inflate_mask[t])) + 2],
                16 > c)
                    b >>>= t,
                    k -= t,
                    this.blens[this.index++] = c;
                else {
                    for (i = 18 == c ? 7 : c - 14,
                    j = 18 == c ? 11 : 3; t + i > k; ) {
                        if (0 == n)
                            return this.bitb = b,
                            this.bitk = k,
                            z.avail_in = n,
                            z.total_in += p - z.next_in_index,
                            z.next_in_index = p,
                            this.write = q,
                            this.inflate_flush(z, r);
                        r = Z_OK,
                        n--,
                        b |= (255 & z.next_in[p++]) << k,
                        k += 8
                    }
                    if (b >>>= t,
                    k -= t,
                    j += b & inflate_mask[i],
                    b >>>= i,
                    k -= i,
                    i = this.index,
                    t = this.table,
                    i + j > 258 + (31 & t) + (t >> 5 & 31) || 16 == c && 1 > i)
                        return this.blens = null ,
                        this.mode = IB_BAD,
                        z.msg = "invalid bit length repeat",
                        r = Z_DATA_ERROR,
                        this.bitb = b,
                        this.bitk = k,
                        z.avail_in = n,
                        z.total_in += p - z.next_in_index,
                        z.next_in_index = p,
                        this.write = q,
                        this.inflate_flush(z, r);
                    c = 16 == c ? this.blens[i - 1] : 0;
                    do
                        this.blens[i++] = c;
                    while (0 != --j);this.index = i
                }
            }
            this.tb[0] = -1;
            var bl = new Int32Array(1)
              , bd = new Int32Array(1)
              , tl = new Int32Array(1)
              , td = new Int32Array(1);
            if (bl[0] = 9,
            bd[0] = 6,
            t = this.table,
            t = this.inftree.inflate_trees_dynamic(257 + (31 & t), 1 + (t >> 5 & 31), this.blens, bl, bd, tl, td, this.hufts, z),
            t != Z_OK)
                return t == Z_DATA_ERROR && (this.blens = null ,
                this.mode = BAD),
                r = t,
                this.bitb = b,
                this.bitk = k,
                z.avail_in = n,
                z.total_in += p - z.next_in_index,
                z.next_in_index = p,
                this.write = q,
                this.inflate_flush(z, r);
            this.codes.init(bl[0], bd[0], this.hufts, tl[0], this.hufts, td[0], z),
            this.mode = IB_CODES;
        case IB_CODES:
            if (this.bitb = b,
            this.bitk = k,
            z.avail_in = n,
            z.total_in += p - z.next_in_index,
            z.next_in_index = p,
            this.write = q,
            (r = this.codes.proc(this, z, r)) != Z_STREAM_END)
                return this.inflate_flush(z, r);
            if (r = Z_OK,
            this.codes.free(z),
            p = z.next_in_index,
            n = z.avail_in,
            b = this.bitb,
            k = this.bitk,
            q = this.write,
            m = q < this.read ? this.read - q - 1 : this.end - q,
            0 == this.last) {
                this.mode = IB_TYPE;
                break
            }
            this.mode = IB_DRY;
        case IB_DRY:
            if (this.write = q,
            r = this.inflate_flush(z, r),
            q = this.write,
            m = q < this.read ? this.read - q - 1 : this.end - q,
            this.read != this.write)
                return this.bitb = b,
                this.bitk = k,
                z.avail_in = n,
                z.total_in += p - z.next_in_index,
                z.next_in_index = p,
                this.write = q,
                this.inflate_flush(z, r);
            mode = DONE;
        case IB_DONE:
            return r = Z_STREAM_END,
            this.bitb = b,
            this.bitk = k,
            z.avail_in = n,
            z.total_in += p - z.next_in_index,
            z.next_in_index = p,
            this.write = q,
            this.inflate_flush(z, r);
        case IB_BAD:
            return r = Z_DATA_ERROR,
            this.bitb = b,
            this.bitk = k,
            z.avail_in = n,
            z.total_in += p - z.next_in_index,
            z.next_in_index = p,
            this.write = q,
            this.inflate_flush(z, r);
        default:
            return r = Z_STREAM_ERROR,
            this.bitb = b,
            this.bitk = k,
            z.avail_in = n,
            z.total_in += p - z.next_in_index,
            z.next_in_index = p,
            this.write = q,
            this.inflate_flush(z, r)
        }
}
,
InfBlocks.prototype.free = function(z) {
    this.reset(z, null ),
    this.window = null ,
    this.hufts = null 
}
,
InfBlocks.prototype.set_dictionary = function(d, start, n) {
    arrayCopy(d, start, window, 0, n),
    this.read = this.write = n
}
,
InfBlocks.prototype.sync_point = function() {
    return this.mode == IB_LENS
}
,
InfBlocks.prototype.inflate_flush = function(z, r) {
    var n, p, q;
    return p = z.next_out_index,
    q = this.read,
    n = (q <= this.write ? this.write : this.end) - q,
    n > z.avail_out && (n = z.avail_out),
    0 != n && r == Z_BUF_ERROR && (r = Z_OK),
    z.avail_out -= n,
    z.total_out += n,
    null  != this.checkfn && (z.adler = this.check = z._adler.adler32(this.check, this.window, q, n)),
    arrayCopy(this.window, q, z.next_out, p, n),
    p += n,
    q += n,
    q == this.end && (q = 0,
    this.write == this.end && (this.write = 0),
    n = this.write - q,
    n > z.avail_out && (n = z.avail_out),
    0 != n && r == Z_BUF_ERROR && (r = Z_OK),
    z.avail_out -= n,
    z.total_out += n,
    null  != this.checkfn && (z.adler = this.check = z._adler.adler32(this.check, this.window, q, n)),
    arrayCopy(this.window, q, z.next_out, p, n),
    p += n,
    q += n),
    z.next_out_index = p,
    this.read = q,
    r
}
;
var IC_START = 0
  , IC_LEN = 1
  , IC_LENEXT = 2
  , IC_DIST = 3
  , IC_DISTEXT = 4
  , IC_COPY = 5
  , IC_LIT = 6
  , IC_WASH = 7
  , IC_END = 8
  , IC_BADCODE = 9;
InfCodes.prototype.init = function(bl, bd, tl, tl_index, td, td_index, z) {
    this.mode = IC_START,
    this.lbits = bl,
    this.dbits = bd,
    this.ltree = tl,
    this.ltree_index = tl_index,
    this.dtree = td,
    this.dtree_index = td_index,
    this.tree = null 
}
,
InfCodes.prototype.proc = function(s, z, r) {
    var j, tindex, e, n, q, m, f, b = 0, k = 0, p = 0;
    for (p = z.next_in_index,
    n = z.avail_in,
    b = s.bitb,
    k = s.bitk,
    q = s.write,
    m = q < s.read ? s.read - q - 1 : s.end - q; ; )
        switch (this.mode) {
        case IC_START:
            if (m >= 258 && n >= 10 && (s.bitb = b,
            s.bitk = k,
            z.avail_in = n,
            z.total_in += p - z.next_in_index,
            z.next_in_index = p,
            s.write = q,
            r = this.inflate_fast(this.lbits, this.dbits, this.ltree, this.ltree_index, this.dtree, this.dtree_index, s, z),
            p = z.next_in_index,
            n = z.avail_in,
            b = s.bitb,
            k = s.bitk,
            q = s.write,
            m = q < s.read ? s.read - q - 1 : s.end - q,
            r != Z_OK)) {
                this.mode = r == Z_STREAM_END ? IC_WASH : IC_BADCODE;
                break
            }
            this.need = this.lbits,
            this.tree = this.ltree,
            this.tree_index = this.ltree_index,
            this.mode = IC_LEN;
        case IC_LEN:
            for (j = this.need; j > k; ) {
                if (0 == n)
                    return s.bitb = b,
                    s.bitk = k,
                    z.avail_in = n,
                    z.total_in += p - z.next_in_index,
                    z.next_in_index = p,
                    s.write = q,
                    s.inflate_flush(z, r);
                r = Z_OK,
                n--,
                b |= (255 & z.next_in[p++]) << k,
                k += 8
            }
            if (tindex = 3 * (this.tree_index + (b & inflate_mask[j])),
            b >>>= this.tree[tindex + 1],
            k -= this.tree[tindex + 1],
            e = this.tree[tindex],
            0 == e) {
                this.lit = this.tree[tindex + 2],
                this.mode = IC_LIT;
                break
            }
            if (0 != (16 & e)) {
                this.get = 15 & e,
                this.len = this.tree[tindex + 2],
                this.mode = IC_LENEXT;
                break
            }
            if (0 == (64 & e)) {
                this.need = e,
                this.tree_index = tindex / 3 + this.tree[tindex + 2];
                break
            }
            if (0 != (32 & e)) {
                this.mode = IC_WASH;
                break
            }
            return this.mode = IC_BADCODE,
            z.msg = "invalid literal/length code",
            r = Z_DATA_ERROR,
            s.bitb = b,
            s.bitk = k,
            z.avail_in = n,
            z.total_in += p - z.next_in_index,
            z.next_in_index = p,
            s.write = q,
            s.inflate_flush(z, r);
        case IC_LENEXT:
            for (j = this.get; j > k; ) {
                if (0 == n)
                    return s.bitb = b,
                    s.bitk = k,
                    z.avail_in = n,
                    z.total_in += p - z.next_in_index,
                    z.next_in_index = p,
                    s.write = q,
                    s.inflate_flush(z, r);
                r = Z_OK,
                n--,
                b |= (255 & z.next_in[p++]) << k,
                k += 8
            }
            this.len += b & inflate_mask[j],
            b >>= j,
            k -= j,
            this.need = this.dbits,
            this.tree = this.dtree,
            this.tree_index = this.dtree_index,
            this.mode = IC_DIST;
        case IC_DIST:
            for (j = this.need; j > k; ) {
                if (0 == n)
                    return s.bitb = b,
                    s.bitk = k,
                    z.avail_in = n,
                    z.total_in += p - z.next_in_index,
                    z.next_in_index = p,
                    s.write = q,
                    s.inflate_flush(z, r);
                r = Z_OK,
                n--,
                b |= (255 & z.next_in[p++]) << k,
                k += 8
            }
            if (tindex = 3 * (this.tree_index + (b & inflate_mask[j])),
            b >>= this.tree[tindex + 1],
            k -= this.tree[tindex + 1],
            e = this.tree[tindex],
            0 != (16 & e)) {
                this.get = 15 & e,
                this.dist = this.tree[tindex + 2],
                this.mode = IC_DISTEXT;
                break
            }
            if (0 == (64 & e)) {
                this.need = e,
                this.tree_index = tindex / 3 + this.tree[tindex + 2];
                break
            }
            return this.mode = IC_BADCODE,
            z.msg = "invalid distance code",
            r = Z_DATA_ERROR,
            s.bitb = b,
            s.bitk = k,
            z.avail_in = n,
            z.total_in += p - z.next_in_index,
            z.next_in_index = p,
            s.write = q,
            s.inflate_flush(z, r);
        case IC_DISTEXT:
            for (j = this.get; j > k; ) {
                if (0 == n)
                    return s.bitb = b,
                    s.bitk = k,
                    z.avail_in = n,
                    z.total_in += p - z.next_in_index,
                    z.next_in_index = p,
                    s.write = q,
                    s.inflate_flush(z, r);
                r = Z_OK,
                n--,
                b |= (255 & z.next_in[p++]) << k,
                k += 8
            }
            this.dist += b & inflate_mask[j],
            b >>= j,
            k -= j,
            this.mode = IC_COPY;
        case IC_COPY:
            for (f = q - this.dist; 0 > f; )
                f += s.end;
            for (; 0 != this.len; ) {
                if (0 == m && (q == s.end && 0 != s.read && (q = 0,
                m = q < s.read ? s.read - q - 1 : s.end - q),
                0 == m && (s.write = q,
                r = s.inflate_flush(z, r),
                q = s.write,
                m = q < s.read ? s.read - q - 1 : s.end - q,
                q == s.end && 0 != s.read && (q = 0,
                m = q < s.read ? s.read - q - 1 : s.end - q),
                0 == m)))
                    return s.bitb = b,
                    s.bitk = k,
                    z.avail_in = n,
                    z.total_in += p - z.next_in_index,
                    z.next_in_index = p,
                    s.write = q,
                    s.inflate_flush(z, r);
                s.window[q++] = s.window[f++],
                m--,
                f == s.end && (f = 0),
                this.len--
            }
            this.mode = IC_START;
            break;
        case IC_LIT:
            if (0 == m && (q == s.end && 0 != s.read && (q = 0,
            m = q < s.read ? s.read - q - 1 : s.end - q),
            0 == m && (s.write = q,
            r = s.inflate_flush(z, r),
            q = s.write,
            m = q < s.read ? s.read - q - 1 : s.end - q,
            q == s.end && 0 != s.read && (q = 0,
            m = q < s.read ? s.read - q - 1 : s.end - q),
            0 == m)))
                return s.bitb = b,
                s.bitk = k,
                z.avail_in = n,
                z.total_in += p - z.next_in_index,
                z.next_in_index = p,
                s.write = q,
                s.inflate_flush(z, r);
            r = Z_OK,
            s.window[q++] = this.lit,
            m--,
            this.mode = IC_START;
            break;
        case IC_WASH:
            if (k > 7 && (k -= 8,
            n++,
            p--),
            s.write = q,
            r = s.inflate_flush(z, r),
            q = s.write,
            m = q < s.read ? s.read - q - 1 : s.end - q,
            s.read != s.write)
                return s.bitb = b,
                s.bitk = k,
                z.avail_in = n,
                z.total_in += p - z.next_in_index,
                z.next_in_index = p,
                s.write = q,
                s.inflate_flush(z, r);
            this.mode = IC_END;
        case IC_END:
            return r = Z_STREAM_END,
            s.bitb = b,
            s.bitk = k,
            z.avail_in = n,
            z.total_in += p - z.next_in_index,
            z.next_in_index = p,
            s.write = q,
            s.inflate_flush(z, r);
        case IC_BADCODE:
            return r = Z_DATA_ERROR,
            s.bitb = b,
            s.bitk = k,
            z.avail_in = n,
            z.total_in += p - z.next_in_index,
            z.next_in_index = p,
            s.write = q,
            s.inflate_flush(z, r);
        default:
            return r = Z_STREAM_ERROR,
            s.bitb = b,
            s.bitk = k,
            z.avail_in = n,
            z.total_in += p - z.next_in_index,
            z.next_in_index = p,
            s.write = q,
            s.inflate_flush(z, r)
        }
}
,
InfCodes.prototype.free = function(z) {}
,
InfCodes.prototype.inflate_fast = function(bl, bd, tl, tl_index, td, td_index, s, z) {
    var t, tp, tp_index, e, b, k, p, n, q, m, ml, md, c, d, r, tp_index_t_3;
    p = z.next_in_index,
    n = z.avail_in,
    b = s.bitb,
    k = s.bitk,
    q = s.write,
    m = q < s.read ? s.read - q - 1 : s.end - q,
    ml = inflate_mask[bl],
    md = inflate_mask[bd];
    do {
        for (; 20 > k; )
            n--,
            b |= (255 & z.next_in[p++]) << k,
            k += 8;
        if (t = b & ml,
        tp = tl,
        tp_index = tl_index,
        tp_index_t_3 = 3 * (tp_index + t),
        0 != (e = tp[tp_index_t_3]))
            for (; ; ) {
                if (b >>= tp[tp_index_t_3 + 1],
                k -= tp[tp_index_t_3 + 1],
                0 != (16 & e)) {
                    for (e &= 15,
                    c = tp[tp_index_t_3 + 2] + (b & inflate_mask[e]),
                    b >>= e,
                    k -= e; 15 > k; )
                        n--,
                        b |= (255 & z.next_in[p++]) << k,
                        k += 8;
                    for (t = b & md,
                    tp = td,
                    tp_index = td_index,
                    tp_index_t_3 = 3 * (tp_index + t),
                    e = tp[tp_index_t_3]; ; ) {
                        if (b >>= tp[tp_index_t_3 + 1],
                        k -= tp[tp_index_t_3 + 1],
                        0 != (16 & e)) {
                            for (e &= 15; e > k; )
                                n--,
                                b |= (255 & z.next_in[p++]) << k,
                                k += 8;
                            if (d = tp[tp_index_t_3 + 2] + (b & inflate_mask[e]),
                            b >>= e,
                            k -= e,
                            m -= c,
                            q >= d)
                                r = q - d,
                                q - r > 0 && 2 > q - r ? (s.window[q++] = s.window[r++],
                                s.window[q++] = s.window[r++],
                                c -= 2) : (s.window[q++] = s.window[r++],
                                s.window[q++] = s.window[r++],
                                c -= 2);
                            else {
                                r = q - d;
                                do
                                    r += s.end;
                                while (0 > r);if (e = s.end - r,
                                c > e) {
                                    if (c -= e,
                                    q - r > 0 && e > q - r) {
                                        do
                                            s.window[q++] = s.window[r++];
                                        while (0 != --e)
                                    } else
                                        arrayCopy(s.window, r, s.window, q, e),
                                        q += e,
                                        r += e,
                                        e = 0;
                                    r = 0
                                }
                            }
                            do
                                s.window[q++] = s.window[r++];
                            while (0 != --c);break
                        }
                        if (0 != (64 & e))
                            return z.msg = "invalid distance code",
                            c = z.avail_in - n,
                            c = c > k >> 3 ? k >> 3 : c,
                            n += c,
                            p -= c,
                            k -= c << 3,
                            s.bitb = b,
                            s.bitk = k,
                            z.avail_in = n,
                            z.total_in += p - z.next_in_index,
                            z.next_in_index = p,
                            s.write = q,
                            Z_DATA_ERROR;
                        t += tp[tp_index_t_3 + 2],
                        t += b & inflate_mask[e],
                        tp_index_t_3 = 3 * (tp_index + t),
                        e = tp[tp_index_t_3]
                    }
                    break
                }
                if (0 != (64 & e))
                    return 0 != (32 & e) ? (c = z.avail_in - n,
                    c = c > k >> 3 ? k >> 3 : c,
                    n += c,
                    p -= c,
                    k -= c << 3,
                    s.bitb = b,
                    s.bitk = k,
                    z.avail_in = n,
                    z.total_in += p - z.next_in_index,
                    z.next_in_index = p,
                    s.write = q,
                    Z_STREAM_END) : (z.msg = "invalid literal/length code",
                    c = z.avail_in - n,
                    c = c > k >> 3 ? k >> 3 : c,
                    n += c,
                    p -= c,
                    k -= c << 3,
                    s.bitb = b,
                    s.bitk = k,
                    z.avail_in = n,
                    z.total_in += p - z.next_in_index,
                    z.next_in_index = p,
                    s.write = q,
                    Z_DATA_ERROR);
                if (t += tp[tp_index_t_3 + 2],
                t += b & inflate_mask[e],
                tp_index_t_3 = 3 * (tp_index + t),
                0 == (e = tp[tp_index_t_3])) {
                    b >>= tp[tp_index_t_3 + 1],
                    k -= tp[tp_index_t_3 + 1],
                    s.window[q++] = tp[tp_index_t_3 + 2],
                    m--;
                    break
                }
            }
        else
            b >>= tp[tp_index_t_3 + 1],
            k -= tp[tp_index_t_3 + 1],
            s.window[q++] = tp[tp_index_t_3 + 2],
            m--
    } while (m >= 258 && n >= 10);return c = z.avail_in - n,
    c = c > k >> 3 ? k >> 3 : c,
    n += c,
    p -= c,
    k -= c << 3,
    s.bitb = b,
    s.bitk = k,
    z.avail_in = n,
    z.total_in += p - z.next_in_index,
    z.next_in_index = p,
    s.write = q,
    Z_OK
}
,
InfTree.prototype.huft_build = function(b, bindex, n, s, d, e, t, m, hp, hn, v) {
    var a, f, g, h, i, j, k, l, mask, p, q, w, xp, y, z;
    p = 0,
    i = n;
    do
        this.c[b[bindex + p]]++,
        p++,
        i--;
    while (0 != i);if (this.c[0] == n)
        return t[0] = -1,
        m[0] = 0,
        Z_OK;
    for (l = m[0],
    j = 1; BMAX >= j && 0 == this.c[j]; j++)
        ;
    for (k = j,
    j > l && (l = j),
    i = BMAX; 0 != i && 0 == this.c[i]; i--)
        ;
    for (g = i,
    l > i && (l = i),
    m[0] = l,
    y = 1 << j; i > j; j++,
    y <<= 1)
        if ((y -= this.c[j]) < 0)
            return Z_DATA_ERROR;
    if ((y -= this.c[i]) < 0)
        return Z_DATA_ERROR;
    for (this.c[i] += y,
    this.x[1] = j = 0,
    p = 1,
    xp = 2; 0 != --i; )
        this.x[xp] = j += this.c[p],
        xp++,
        p++;
    i = 0,
    p = 0;
    do
        0 != (j = b[bindex + p]) && (this.v[this.x[j]++] = i),
        p++;
    while (++i < n);for (n = this.x[g],
    this.x[0] = i = 0,
    p = 0,
    h = -1,
    w = -l,
    this.u[0] = 0,
    q = 0,
    z = 0; g >= k; k++)
        for (a = this.c[k]; 0 != a--; ) {
            for (; k > w + l; ) {
                if (h++,
                w += l,
                z = g - w,
                z = z > l ? l : z,
                (f = 1 << (j = k - w)) > a + 1 && (f -= a + 1,
                xp = k,
                z > j))
                    for (; ++j < z && !((f <<= 1) <= this.c[++xp]); )
                        f -= this.c[xp];
                if (z = 1 << j,
                this.hn[0] + z > MANY)
                    return Z_DATA_ERROR;
                this.u[h] = q = this.hn[0],
                this.hn[0] += z,
                0 != h ? (this.x[h] = i,
                this.r[0] = j,
                this.r[1] = l,
                j = i >>> w - l,
                this.r[2] = q - this.u[h - 1] - j,
                arrayCopy(this.r, 0, hp, 3 * (this.u[h - 1] + j), 3)) : t[0] = q
            }
            for (this.r[1] = k - w,
            p >= n ? this.r[0] = 192 : v[p] < s ? (this.r[0] = this.v[p] < 256 ? 0 : 96,
            this.r[2] = this.v[p++]) : (this.r[0] = e[this.v[p] - s] + 16 + 64,
            this.r[2] = d[this.v[p++] - s]),
            f = 1 << k - w,
            j = i >>> w; z > j; j += f)
                arrayCopy(this.r, 0, hp, 3 * (q + j), 3);
            for (j = 1 << k - 1; 0 != (i & j); j >>>= 1)
                i ^= j;
            for (i ^= j,
            mask = (1 << w) - 1; (i & mask) != this.x[h]; )
                h--,
                w -= l,
                mask = (1 << w) - 1
        }
    return 0 != y && 1 != g ? Z_BUF_ERROR : Z_OK
}
,
InfTree.prototype.inflate_trees_bits = function(c, bb, tb, hp, z) {
    var result;
    return this.initWorkArea(19),
    this.hn[0] = 0,
    result = this.huft_build(c, 0, 19, 19, null , null , tb, bb, hp, this.hn, this.v),
    result == Z_DATA_ERROR ? z.msg = "oversubscribed dynamic bit lengths tree" : (result == Z_BUF_ERROR || 0 == bb[0]) && (z.msg = "incomplete dynamic bit lengths tree",
    result = Z_DATA_ERROR),
    result
}
,
InfTree.prototype.inflate_trees_dynamic = function(nl, nd, c, bl, bd, tl, td, hp, z) {
    var result;
    return this.initWorkArea(288),
    this.hn[0] = 0,
    result = this.huft_build(c, 0, nl, 257, cplens, cplext, tl, bl, hp, this.hn, this.v),
    result != Z_OK || 0 == bl[0] ? (result == Z_DATA_ERROR ? z.msg = "oversubscribed literal/length tree" : result != Z_MEM_ERROR && (z.msg = "incomplete literal/length tree",
    result = Z_DATA_ERROR),
    result) : (this.initWorkArea(288),
    result = this.huft_build(c, nl, nd, 0, cpdist, cpdext, td, bd, hp, this.hn, this.v),
    result != Z_OK || 0 == bd[0] && nl > 257 ? (result == Z_DATA_ERROR ? z.msg = "oversubscribed distance tree" : result == Z_BUF_ERROR ? (z.msg = "incomplete distance tree",
    result = Z_DATA_ERROR) : result != Z_MEM_ERROR && (z.msg = "empty distance tree with lengths",
    result = Z_DATA_ERROR),
    result) : Z_OK)
}
,
InfTree.prototype.initWorkArea = function(vsize) {
    null  == this.hn && (this.hn = new Int32Array(1),
    this.v = new Int32Array(vsize),
    this.c = new Int32Array(BMAX + 1),
    this.r = new Int32Array(3),
    this.u = new Int32Array(BMAX),
    this.x = new Int32Array(BMAX + 1)),
    this.v.length < vsize && (this.v = new Int32Array(vsize));
    for (var i = 0; vsize > i; i++)
        this.v[i] = 0;
    for (var i = 0; BMAX + 1 > i; i++)
        this.c[i] = 0;
    for (var i = 0; 3 > i; i++)
        this.r[i] = 0;
    arrayCopy(this.c, 0, this.u, 0, BMAX),
    arrayCopy(this.c, 0, this.x, 0, BMAX + 1)
}
;
var testArray = new Uint8Array(1)
  , hasSubarray = "function" == typeof testArray.subarray
  , hasSlice = !1
  , ADLER_BASE = 65521
  , ADLER_NMAX = 5552;
(function() {
    "use strict";
    function q(b) {
        throw b
    }
    function A(b, a) {
        var c = b.split(".")
          , d = aa;
        !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
        for (var f; c.length && (f = c.shift()); )
            c.length || a === t ? d = d[f] ? d[f] : d[f] = {} : d[f] = a
    }
    function F(b, a) {
        this.index = "number" == typeof a ? a : 0,
        this.m = 0,
        this.buffer = b instanceof (B ? Uint8Array : Array) ? b : new (B ? Uint8Array : Array)(32768),
        2 * this.buffer.length <= this.index && q(Error("invalid index")),
        this.buffer.length <= this.index && this.f()
    }
    function ja(b, a, c) {
        var d, f = "number" == typeof a ? a : a = 0, e = "number" == typeof c ? c : b.length;
        for (d = -1,
        f = 7 & e; f--; ++a)
            d = d >>> 8 ^ O[255 & (d ^ b[a])];
        for (f = e >> 3; f--; a += 8)
            d = d >>> 8 ^ O[255 & (d ^ b[a])],
            d = d >>> 8 ^ O[255 & (d ^ b[a + 1])],
            d = d >>> 8 ^ O[255 & (d ^ b[a + 2])],
            d = d >>> 8 ^ O[255 & (d ^ b[a + 3])],
            d = d >>> 8 ^ O[255 & (d ^ b[a + 4])],
            d = d >>> 8 ^ O[255 & (d ^ b[a + 5])],
            d = d >>> 8 ^ O[255 & (d ^ b[a + 6])],
            d = d >>> 8 ^ O[255 & (d ^ b[a + 7])];
        return (4294967295 ^ d) >>> 0
    }
    function P() {}
    function la(b) {
        this.buffer = new (B ? Uint16Array : Array)(2 * b),
        this.length = 0
    }
    function ma(b) {
        var f, e, g, k, h, l, s, n, m, a = b.length, c = 0, d = Number.POSITIVE_INFINITY;
        for (n = 0; a > n; ++n)
            b[n] > c && (c = b[n]),
            b[n] < d && (d = b[n]);
        for (f = 1 << c,
        e = new (B ? Uint32Array : Array)(f),
        g = 1,
        k = 0,
        h = 2; c >= g; ) {
            for (n = 0; a > n; ++n)
                if (b[n] === g) {
                    for (l = 0,
                    s = k,
                    m = 0; g > m; ++m)
                        l = l << 1 | 1 & s,
                        s >>= 1;
                    for (m = l; f > m; m += h)
                        e[m] = g << 16 | n;
                    ++k
                }
            ++g,
            k <<= 1,
            h <<= 1
        }
        return [e, c, d]
    }
    function na(b, a) {
        this.k = qa,
        this.I = 0,
        this.input = B && b instanceof Array ? new Uint8Array(b) : b,
        this.b = 0,
        a && (a.lazy && (this.I = a.lazy),
        "number" == typeof a.compressionType && (this.k = a.compressionType),
        a.outputBuffer && (this.a = B && a.outputBuffer instanceof Array ? new Uint8Array(a.outputBuffer) : a.outputBuffer),
        "number" == typeof a.outputIndex && (this.b = a.outputIndex)),
        this.a || (this.a = new (B ? Uint8Array : Array)(32768))
    }
    function xa(b, a) {
        this.length = b,
        this.P = a
    }
    function ta(b, a) {
        function c(a, c) {
            var f, b = a.P, d = [], e = 0;
            f = Aa[a.length],
            d[e++] = 65535 & f,
            d[e++] = f >> 16 & 255,
            d[e++] = f >> 24;
            var g;
            switch (u) {
            case 1 === b:
                g = [0, b - 1, 0];
                break;
            case 2 === b:
                g = [1, b - 2, 0];
                break;
            case 3 === b:
                g = [2, b - 3, 0];
                break;
            case 4 === b:
                g = [3, b - 4, 0];
                break;
            case 6 >= b:
                g = [4, b - 5, 1];
                break;
            case 8 >= b:
                g = [5, b - 7, 1];
                break;
            case 12 >= b:
                g = [6, b - 9, 2];
                break;
            case 16 >= b:
                g = [7, b - 13, 2];
                break;
            case 24 >= b:
                g = [8, b - 17, 3];
                break;
            case 32 >= b:
                g = [9, b - 25, 3];
                break;
            case 48 >= b:
                g = [10, b - 33, 4];
                break;
            case 64 >= b:
                g = [11, b - 49, 4];
                break;
            case 96 >= b:
                g = [12, b - 65, 5];
                break;
            case 128 >= b:
                g = [13, b - 97, 5];
                break;
            case 192 >= b:
                g = [14, b - 129, 6];
                break;
            case 256 >= b:
                g = [15, b - 193, 6];
                break;
            case 384 >= b:
                g = [16, b - 257, 7];
                break;
            case 512 >= b:
                g = [17, b - 385, 7];
                break;
            case 768 >= b:
                g = [18, b - 513, 8];
                break;
            case 1024 >= b:
                g = [19, b - 769, 8];
                break;
            case 1536 >= b:
                g = [20, b - 1025, 9];
                break;
            case 2048 >= b:
                g = [21, b - 1537, 9];
                break;
            case 3072 >= b:
                g = [22, b - 2049, 10];
                break;
            case 4096 >= b:
                g = [23, b - 3073, 10];
                break;
            case 6144 >= b:
                g = [24, b - 4097, 11];
                break;
            case 8192 >= b:
                g = [25, b - 6145, 11];
                break;
            case 12288 >= b:
                g = [26, b - 8193, 12];
                break;
            case 16384 >= b:
                g = [27, b - 12289, 12];
                break;
            case 24576 >= b:
                g = [28, b - 16385, 13];
                break;
            case 32768 >= b:
                g = [29, b - 24577, 13];
                break;
            default:
                q("invalid distance")
            }
            f = g,
            d[e++] = f[0],
            d[e++] = f[1],
            d[e++] = f[2];
            var h, k;
            for (h = 0,
            k = d.length; k > h; ++h)
                m[p++] = d[h];
            v[d[0]]++,
            x[d[3]]++,
            r = a.length + c - 1,
            n = null 
        }
        var d, f, e, g, k, l, s, n, y, h = {}, m = B ? new Uint16Array(2 * a.length) : [], p = 0, r = 0, v = new (B ? Uint32Array : Array)(286), x = new (B ? Uint32Array : Array)(30), Q = b.I;
        if (!B) {
            for (e = 0; 285 >= e; )
                v[e++] = 0;
            for (e = 0; 29 >= e; )
                x[e++] = 0
        }
        for (v[256] = 1,
        d = 0,
        f = a.length; f > d; ++d) {
            for (e = k = 0,
            g = 3; g > e && d + e !== f; ++e)
                k = k << 8 | a[d + e];
            if (h[k] === t && (h[k] = []),
            l = h[k],
            !(0 < r--)) {
                for (; 0 < l.length && 32768 < d - l[0]; )
                    l.shift();
                if (d + 3 >= f) {
                    for (n && c(n, -1),
                    e = 0,
                    g = f - d; g > e; ++e)
                        y = a[d + e],
                        m[p++] = y,
                        ++v[y];
                    break
                }
                0 < l.length ? (s = Ba(a, d, l),
                n ? n.length < s.length ? (y = a[d - 1],
                m[p++] = y,
                ++v[y],
                c(s, 0)) : c(n, -1) : s.length < Q ? n = s : c(s, 0)) : n ? c(n, -1) : (y = a[d],
                m[p++] = y,
                ++v[y])
            }
            l.push(d)
        }
        return m[p++] = 256,
        v[256]++,
        b.V = v,
        b.U = x,
        B ? m.subarray(0, p) : m
    }
    function Ba(b, a, c) {
        var d, f, g, k, h, l, e = 0, s = b.length;
        k = 0,
        l = c.length;
        a: for (; l > k; k++) {
            if (d = c[l - k - 1],
            g = 3,
            e > 3) {
                for (h = e; h > 3; h--)
                    if (b[d + h - 1] !== b[a + h - 1])
                        continue a;
                g = e
            }
            for (; 258 > g && s > a + g && b[d + g] === b[a + g]; )
                ++g;
            if (g > e && (f = d,
            e = g),
            258 === g)
                break
        }
        return new xa(e,a - f)
    }
    function ua(b, a) {
        var e, g, k, h, l, c = b.length, d = new la(572), f = new (B ? Uint8Array : Array)(c);
        if (!B)
            for (h = 0; c > h; h++)
                f[h] = 0;
        for (h = 0; c > h; ++h)
            0 < b[h] && d.push(h, b[h]);
        if (e = Array(d.length / 2),
        g = new (B ? Uint32Array : Array)(d.length / 2),
        1 === e.length)
            return f[d.pop().index] = 1,
            f;
        for (h = 0,
        l = d.length / 2; l > h; ++h)
            e[h] = d.pop(),
            g[h] = e[h].value;
        for (k = Ca(g, g.length, a),
        h = 0,
        l = e.length; l > h; ++h)
            f[e[h].index] = k[h];
        return f
    }
    function Ca(b, a, c) {
        function d(b) {
            var c = h[b][l[b]];
            c === a ? (d(b + 1),
            d(b + 1)) : --g[c],
            ++l[b]
        }
        var m, p, r, v, x, f = new (B ? Uint16Array : Array)(c), e = new (B ? Uint8Array : Array)(c), g = new (B ? Uint8Array : Array)(a), k = Array(c), h = Array(c), l = Array(c), s = (1 << c) - a, n = 1 << c - 1;
        for (f[c - 1] = a,
        p = 0; c > p; ++p)
            n > s ? e[p] = 0 : (e[p] = 1,
            s -= n),
            s <<= 1,
            f[c - 2 - p] = (f[c - 1 - p] / 2 | 0) + a;
        for (f[0] = e[0],
        k[0] = Array(f[0]),
        h[0] = Array(f[0]),
        p = 1; c > p; ++p)
            f[p] > 2 * f[p - 1] + e[p] && (f[p] = 2 * f[p - 1] + e[p]),
            k[p] = Array(f[p]),
            h[p] = Array(f[p]);
        for (m = 0; a > m; ++m)
            g[m] = c;
        for (r = 0; r < f[c - 1]; ++r)
            k[c - 1][r] = b[r],
            h[c - 1][r] = r;
        for (m = 0; c > m; ++m)
            l[m] = 0;
        for (1 === e[c - 1] && (--g[0],
        ++l[c - 1]),
        p = c - 2; p >= 0; --p) {
            for (v = m = 0,
            x = l[p + 1],
            r = 0; r < f[p]; r++)
                v = k[p + 1][x] + k[p + 1][x + 1],
                v > b[m] ? (k[p][r] = v,
                h[p][r] = a,
                x += 2) : (k[p][r] = b[m],
                h[p][r] = m,
                ++m);
            l[p] = 0,
            1 === e[p] && d(p)
        }
        return g
    }
    function va(b) {
        var e, g, k, h, a = new (B ? Uint16Array : Array)(b.length), c = [], d = [], f = 0;
        for (e = 0,
        g = b.length; g > e; e++)
            c[b[e]] = (0 | c[b[e]]) + 1;
        for (e = 1,
        g = 16; g >= e; e++)
            d[e] = f,
            f += 0 | c[e],
            f <<= 1;
        for (e = 0,
        g = b.length; g > e; e++)
            for (f = d[b[e]],
            d[b[e]] += 1,
            k = a[e] = 0,
            h = b[e]; h > k; k++)
                a[e] = a[e] << 1 | 1 & f,
                f >>>= 1;
        return a
    }
    function Da(b, a) {
        this.input = b,
        this.b = this.c = 0,
        this.i = {},
        a && (a.flags && (this.i = a.flags),
        "string" == typeof a.filename && (this.filename = a.filename),
        "string" == typeof a.comment && (this.A = a.comment),
        a.deflateOptions && (this.l = a.deflateOptions)),
        this.l || (this.l = {})
    }
    function T(b, a) {
        switch (this.p = [],
        this.q = 32768,
        this.e = this.j = this.c = this.u = 0,
        this.input = B ? new Uint8Array(b) : b,
        this.w = !1,
        this.r = Ia,
        this.L = !1,
        (a || !(a = {})) && (a.index && (this.c = a.index),
        a.bufferSize && (this.q = a.bufferSize),
        a.bufferType && (this.r = a.bufferType),
        a.resize && (this.L = a.resize)),
        this.r) {
        case Xa:
            this.b = 32768,
            this.a = new (B ? Uint8Array : Array)(32768 + this.q + 258);
            break;
        case Ia:
            this.b = 0,
            this.a = new (B ? Uint8Array : Array)(this.q),
            this.f = this.T,
            this.B = this.Q,
            this.s = this.S;
            break;
        default:
            q(Error("invalid inflate mode"))
        }
    }
    function U(b, a) {
        for (var g, c = b.j, d = b.e, f = b.input, e = b.c; a > d; )
            g = f[e++],
            g === t && q(Error("input buffer is broken")),
            c |= g << d,
            d += 8;
        return g = c & (1 << a) - 1,
        b.j = c >>> a,
        b.e = d - a,
        b.c = e,
        g
    }
    function rb(b, a) {
        for (var h, l, s, c = b.j, d = b.e, f = b.input, e = b.c, g = a[0], k = a[1]; k > d && (h = f[e++],
        h !== t); )
            c |= h << d,
            d += 8;
        return l = g[c & (1 << k) - 1],
        s = l >>> 16,
        b.j = c >> s,
        b.e = d - s,
        b.c = e,
        65535 & l
    }
    function ab(b) {
        function a(a, b, c) {
            var d, e, f, g;
            for (g = 0; a > g; )
                switch (d = rb(this, b)) {
                case 16:
                    for (f = 3 + U(this, 2); f--; )
                        c[g++] = e;
                    break;
                case 17:
                    for (f = 3 + U(this, 3); f--; )
                        c[g++] = 0;
                    e = 0;
                    break;
                case 18:
                    for (f = 11 + U(this, 7); f--; )
                        c[g++] = 0;
                    e = 0;
                    break;
                default:
                    e = c[g++] = d
                }
            return c
        }
        var g, k, h, l, c = U(b, 5) + 257, d = U(b, 5) + 1, f = U(b, 4) + 4, e = new (B ? Uint8Array : Array)(cb.length);
        for (l = 0; f > l; ++l)
            e[cb[l]] = U(b, 3);
        g = ma(e),
        k = new (B ? Uint8Array : Array)(c),
        h = new (B ? Uint8Array : Array)(d),
        b.s(ma(a.call(b, c, g, k)), ma(a.call(b, d, g, h)))
    }
    function sb(b) {
        this.input = b,
        this.c = 0,
        this.t = [],
        this.D = !1
    }
    function tb(b) {
        if ("string" == typeof b) {
            var c, d, a = b.split("");
            for (c = 0,
            d = a.length; d > c; c++)
                a[c] = (255 & a[c].charCodeAt(0)) >>> 0;
            b = a
        }
        for (var k, f = 1, e = 0, g = b.length, h = 0; g > 0; ) {
            k = g > 1024 ? 1024 : g,
            g -= k;
            do
                f += b[h++],
                e += f;
            while (--k);f %= 65521,
            e %= 65521
        }
        return (e << 16 | f) >>> 0
    }
    function ub(b, a) {
        var c, d;
        switch (this.input = b,
        this.c = 0,
        (a || !(a = {})) && (a.index && (this.c = a.index),
        a.verify && (this.Z = a.verify)),
        c = b[this.c++],
        d = b[this.c++],
        15 & c) {
        case vb:
            this.method = vb;
            break;
        default:
            q(Error("unsupported compression method"))
        }
        0 !== ((c << 8) + d) % 31 && q(Error("invalid fcheck flag:" + ((c << 8) + d) % 31)),
        32 & d && q(Error("fdict flag is not supported")),
        this.K = new T(b,{
            index: this.c,
            bufferSize: a.bufferSize,
            bufferType: a.bufferType,
            resize: a.resize
        })
    }
    function wb(b, a) {
        this.input = b,
        this.a = new (B ? Uint8Array : Array)(32768),
        this.k = W.o;
        var d, c = {};
        !a && (a = {}) || "number" != typeof a.compressionType || (this.k = a.compressionType);
        for (d in a)
            c[d] = a[d];
        c.outputBuffer = this.a,
        this.J = new na(this.input,c)
    }
    function xb(b, a) {
        var c, d, f, e;
        if (Object.keys)
            c = Object.keys(a);
        else
            for (d in c = [],
            f = 0,
            a)
                c[f++] = d;
        for (f = 0,
        e = c.length; e > f; ++f)
            d = c[f],
            A(b + "." + d, a[d])
    }
    var t = void 0
      , u = !0
      , aa = this
      , B = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array;
    F.prototype.f = function() {
        var a, b = this.buffer, c = b.length, d = new (B ? Uint8Array : Array)(c << 1);
        if (B)
            d.set(b);
        else
            for (a = 0; c > a; ++a)
                d[a] = b[a];
        return this.buffer = d
    }
    ,
    F.prototype.d = function(b, a, c) {
        var k, d = this.buffer, f = this.index, e = this.m, g = d[f];
        if (c && a > 1 && (b = a > 8 ? (H[255 & b] << 24 | H[b >>> 8 & 255] << 16 | H[b >>> 16 & 255] << 8 | H[b >>> 24 & 255]) >> 32 - a : H[b] >> 8 - a),
        8 > a + e)
            g = g << a | b,
            e += a;
        else
            for (k = 0; a > k; ++k)
                g = g << 1 | b >> a - k - 1 & 1,
                8 === ++e && (e = 0,
                d[f++] = H[g],
                g = 0,
                f === d.length && (d = this.f()));
        d[f] = g,
        this.buffer = d,
        this.m = e,
        this.index = f
    }
    ,
    F.prototype.finish = function() {
        var c, b = this.buffer, a = this.index;
        return 0 < this.m && (b[a] <<= 8 - this.m,
        b[a] = H[b[a]],
        a++),
        B ? c = b.subarray(0, a) : (b.length = a,
        c = b),
        c
    }
    ;
    var ca, ba = new (B ? Uint8Array : Array)(256);
    for (ca = 0; 256 > ca; ++ca) {
        for (var K = ca, da = K, ea = 7, K = K >>> 1; K; K >>>= 1)
            da <<= 1,
            da |= 1 & K,
            --ea;
        ba[ca] = (da << ea & 255) >>> 0
    }
    var H = ba
      , ka = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117]
      , O = B ? new Uint32Array(ka) : ka;
    P.prototype.getName = function() {
        return this.name
    }
    ,
    P.prototype.getData = function() {
        return this.data
    }
    ,
    P.prototype.X = function() {
        return this.Y
    }
    ,
    A("Zlib.GunzipMember", P),
    A("Zlib.GunzipMember.prototype.getName", P.prototype.getName),
    A("Zlib.GunzipMember.prototype.getData", P.prototype.getData),
    A("Zlib.GunzipMember.prototype.getMtime", P.prototype.X),
    la.prototype.getParent = function(b) {
        return 2 * ((b - 2) / 4 | 0)
    }
    ,
    la.prototype.push = function(b, a) {
        var c, d, e, f = this.buffer;
        for (c = this.length,
        f[this.length++] = a,
        f[this.length++] = b; c > 0 && (d = this.getParent(c),
        f[c] > f[d]); )
            e = f[c],
            f[c] = f[d],
            f[d] = e,
            e = f[c + 1],
            f[c + 1] = f[d + 1],
            f[d + 1] = e,
            c = d;
        return this.length
    }
    ,
    la.prototype.pop = function() {
        var b, a, d, f, e, c = this.buffer;
        for (a = c[0],
        b = c[1],
        this.length -= 2,
        c[0] = c[this.length],
        c[1] = c[this.length + 1],
        e = 0; (f = 2 * e + 2,
        !(f >= this.length)) && (f + 2 < this.length && c[f + 2] > c[f] && (f += 2),
        c[f] > c[e]); )
            d = c[e],
            c[e] = c[f],
            c[f] = d,
            d = c[e + 1],
            c[e + 1] = c[f + 1],
            c[f + 1] = d,
            e = f;
        return {
            index: b,
            value: a,
            length: this.length
        }
    }
    ;
    var S, qa = 2, ra = {
        NONE: 0,
        v: 1,
        o: qa,
        aa: 3
    }, sa = [];
    for (S = 0; 288 > S; S++)
        switch (u) {
        case 143 >= S:
            sa.push([S + 48, 8]);
            break;
        case 255 >= S:
            sa.push([S - 144 + 400, 9]);
            break;
        case 279 >= S:
            sa.push([S - 256 + 0, 7]);
            break;
        case 287 >= S:
            sa.push([S - 280 + 192, 8]);
            break;
        default:
            q("invalid literal: " + S)
        }
    na.prototype.g = function() {
        var b, a, c, d, f = this.input;
        switch (this.k) {
        case 0:
            for (c = 0,
            d = f.length; d > c; ) {
                a = B ? f.subarray(c, c + 65535) : f.slice(c, c + 65535),
                c += a.length;
                var e = a
                  , g = c === d
                  , k = t
                  , h = t
                  , l = t
                  , s = t
                  , n = t
                  , m = this.a
                  , p = this.b;
                if (B) {
                    for (m = new Uint8Array(this.a.buffer); m.length <= p + e.length + 5; )
                        m = new Uint8Array(m.length << 1);
                    m.set(this.a)
                }
                if (k = g ? 1 : 0,
                m[p++] = 0 | k,
                h = e.length,
                l = ~h + 65536 & 65535,
                m[p++] = 255 & h,
                m[p++] = h >>> 8 & 255,
                m[p++] = 255 & l,
                m[p++] = l >>> 8 & 255,
                B)
                    m.set(e, p),
                    p += e.length,
                    m = m.subarray(0, p);
                else {
                    for (s = 0,
                    n = e.length; n > s; ++s)
                        m[p++] = e[s];
                    m.length = p
                }
                this.b = p,
                this.a = m
            }
            break;
        case 1:
            var r = new F(B ? new Uint8Array(this.a.buffer) : this.a,this.b);
            r.d(1, 1, u),
            r.d(1, 2, u);
            var x, Q, y, v = ta(this, f);
            for (x = 0,
            Q = v.length; Q > x; x++)
                if (y = v[x],
                F.prototype.d.apply(r, sa[y]),
                y > 256)
                    r.d(v[++x], v[++x], u),
                    r.d(v[++x], 5),
                    r.d(v[++x], v[++x], u);
                else if (256 === y)
                    break;
            this.a = r.finish(),
            this.b = this.a.length;
            break;
        case qa:
            var Ja, R, X, Y, Z, fa, Ka, ga, La, oa, Ma, $, pa, C, Na, E = new F(B ? new Uint8Array(this.a.buffer) : this.a,this.b), pb = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], wa = Array(19);
            for (Ja = qa,
            E.d(1, 1, u),
            E.d(Ja, 2, u),
            R = ta(this, f),
            fa = ua(this.V, 15),
            Ka = va(fa),
            ga = ua(this.U, 7),
            La = va(ga),
            X = 286; X > 257 && 0 === fa[X - 1]; X--)
                ;
            for (Y = 30; Y > 1 && 0 === ga[Y - 1]; Y--)
                ;
            var w, L, z, ha, G, D, Oa = X, Pa = Y, J = new (B ? Uint32Array : Array)(Oa + Pa), I = new (B ? Uint32Array : Array)(316), M = new (B ? Uint8Array : Array)(19);
            for (w = L = 0; Oa > w; w++)
                J[L++] = fa[w];
            for (w = 0; Pa > w; w++)
                J[L++] = ga[w];
            if (!B)
                for (w = 0,
                ha = M.length; ha > w; ++w)
                    M[w] = 0;
            for (w = G = 0,
            ha = J.length; ha > w; w += L) {
                for (L = 1; ha > w + L && J[w + L] === J[w]; ++L)
                    ;
                if (z = L,
                0 === J[w])
                    if (3 > z)
                        for (; 0 < z--; )
                            I[G++] = 0,
                            M[0]++;
                    else
                        for (; z > 0; )
                            D = 138 > z ? z : 138,
                            D > z - 3 && z > D && (D = z - 3),
                            10 >= D ? (I[G++] = 17,
                            I[G++] = D - 3,
                            M[17]++) : (I[G++] = 18,
                            I[G++] = D - 11,
                            M[18]++),
                            z -= D;
                else if (I[G++] = J[w],
                M[J[w]]++,
                z--,
                3 > z)
                    for (; 0 < z--; )
                        I[G++] = J[w],
                        M[J[w]]++;
                else
                    for (; z > 0; )
                        D = 6 > z ? z : 6,
                        D > z - 3 && z > D && (D = z - 3),
                        I[G++] = 16,
                        I[G++] = D - 3,
                        M[16]++,
                        z -= D
            }
            for (b = B ? I.subarray(0, G) : I.slice(0, G),
            oa = ua(M, 7),
            C = 0; 19 > C; C++)
                wa[C] = oa[pb[C]];
            for (Z = 19; Z > 4 && 0 === wa[Z - 1]; Z--)
                ;
            for (Ma = va(oa),
            E.d(X - 257, 5, u),
            E.d(Y - 1, 5, u),
            E.d(Z - 4, 4, u),
            C = 0; Z > C; C++)
                E.d(wa[C], 3, u);
            for (C = 0,
            Na = b.length; Na > C; C++)
                if ($ = b[C],
                E.d(Ma[$], oa[$], u),
                $ >= 16) {
                    switch (C++,
                    $) {
                    case 16:
                        pa = 2;
                        break;
                    case 17:
                        pa = 3;
                        break;
                    case 18:
                        pa = 7;
                        break;
                    default:
                        q("invalid code: " + $)
                    }
                    E.d(b[C], pa, u)
                }
            var N, Sa, ia, za, Ta, Ua, Va, Wa, Qa = [Ka, fa], Ra = [La, ga];
            for (Ta = Qa[0],
            Ua = Qa[1],
            Va = Ra[0],
            Wa = Ra[1],
            N = 0,
            Sa = R.length; Sa > N; ++N)
                if (ia = R[N],
                E.d(Ta[ia], Ua[ia], u),
                ia > 256)
                    E.d(R[++N], R[++N], u),
                    za = R[++N],
                    E.d(Va[za], Wa[za], u),
                    E.d(R[++N], R[++N], u);
                else if (256 === ia)
                    break;
            this.a = E.finish(),
            this.b = this.a.length;
            break;
        default:
            q("invalid compression type")
        }
        return this.a
    }
    ;
    var ya = function() {
        function b(a) {
            switch (u) {
            case 3 === a:
                return [257, a - 3, 0];
            case 4 === a:
                return [258, a - 4, 0];
            case 5 === a:
                return [259, a - 5, 0];
            case 6 === a:
                return [260, a - 6, 0];
            case 7 === a:
                return [261, a - 7, 0];
            case 8 === a:
                return [262, a - 8, 0];
            case 9 === a:
                return [263, a - 9, 0];
            case 10 === a:
                return [264, a - 10, 0];
            case 12 >= a:
                return [265, a - 11, 1];
            case 14 >= a:
                return [266, a - 13, 1];
            case 16 >= a:
                return [267, a - 15, 1];
            case 18 >= a:
                return [268, a - 17, 1];
            case 22 >= a:
                return [269, a - 19, 2];
            case 26 >= a:
                return [270, a - 23, 2];
            case 30 >= a:
                return [271, a - 27, 2];
            case 34 >= a:
                return [272, a - 31, 2];
            case 42 >= a:
                return [273, a - 35, 3];
            case 50 >= a:
                return [274, a - 43, 3];
            case 58 >= a:
                return [275, a - 51, 3];
            case 66 >= a:
                return [276, a - 59, 3];
            case 82 >= a:
                return [277, a - 67, 4];
            case 98 >= a:
                return [278, a - 83, 4];
            case 114 >= a:
                return [279, a - 99, 4];
            case 130 >= a:
                return [280, a - 115, 4];
            case 162 >= a:
                return [281, a - 131, 5];
            case 194 >= a:
                return [282, a - 163, 5];
            case 226 >= a:
                return [283, a - 195, 5];
            case 257 >= a:
                return [284, a - 227, 5];
            case 258 === a:
                return [285, a - 258, 0];
            default:
                q("invalid length: " + a)
            }
        }
        var c, d, a = [];
        for (c = 3; 258 >= c; c++)
            d = b(c),
            a[c] = d[2] << 24 | d[1] << 16 | d[0];
        return a
    }()
      , Aa = B ? new Uint32Array(ya) : ya;
    Da.prototype.g = function() {
        var b, a, c, d, f, e, g, k, h = new (B ? Uint8Array : Array)(32768), l = 0, s = this.input, n = this.c, m = this.filename, p = this.A;
        if (h[l++] = 31,
        h[l++] = 139,
        h[l++] = 8,
        b = 0,
        this.i.fname && (b |= Ea),
        this.i.fcomment && (b |= Fa),
        this.i.fhcrc && (b |= Ga),
        h[l++] = b,
        a = (Date.now ? Date.now() : +new Date) / 1e3 | 0,
        h[l++] = 255 & a,
        h[l++] = a >>> 8 & 255,
        h[l++] = a >>> 16 & 255,
        h[l++] = a >>> 24 & 255,
        h[l++] = 0,
        h[l++] = Ha,
        this.i.fname !== t) {
            for (g = 0,
            k = m.length; k > g; ++g)
                e = m.charCodeAt(g),
                e > 255 && (h[l++] = e >>> 8 & 255),
                h[l++] = 255 & e;
            h[l++] = 0
        }
        if (this.i.comment) {
            for (g = 0,
            k = p.length; k > g; ++g)
                e = p.charCodeAt(g),
                e > 255 && (h[l++] = e >>> 8 & 255),
                h[l++] = 255 & e;
            h[l++] = 0
        }
        return this.i.fhcrc && (c = 65535 & ja(h, 0, l),
        h[l++] = 255 & c,
        h[l++] = c >>> 8 & 255),
        this.l.outputBuffer = h,
        this.l.outputIndex = l,
        f = new na(s,this.l),
        h = f.g(),
        l = f.b,
        B && (l + 8 > h.buffer.byteLength ? (this.a = new Uint8Array(l + 8),
        this.a.set(new Uint8Array(h.buffer)),
        h = this.a) : h = new Uint8Array(h.buffer)),
        d = ja(s, t, t),
        h[l++] = 255 & d,
        h[l++] = d >>> 8 & 255,
        h[l++] = d >>> 16 & 255,
        h[l++] = d >>> 24 & 255,
        k = s.length,
        h[l++] = 255 & k,
        h[l++] = k >>> 8 & 255,
        h[l++] = k >>> 16 & 255,
        h[l++] = k >>> 24 & 255,
        this.c = n,
        B && l < h.length && (this.a = h = h.subarray(0, l)),
        h
    }
    ;
    var Ha = 255
      , Ga = 2
      , Ea = 8
      , Fa = 16;
    A("Zlib.Gzip", Da),
    A("Zlib.Gzip.prototype.compress", Da.prototype.g);
    var Xa = 0
      , Ia = 1
      , Ya = {
        N: Xa,
        M: Ia
    };
    T.prototype.h = function() {
        for (; !this.w; ) {
            var b = U(this, 3);
            switch (1 & b && (this.w = u),
            b >>>= 1) {
            case 0:
                var a = this.input
                  , c = this.c
                  , d = this.a
                  , f = this.b
                  , e = t
                  , g = t
                  , k = t
                  , h = d.length
                  , l = t;
                switch (this.e = this.j = 0,
                e = a[c++],
                e === t && q(Error("invalid uncompressed block header: LEN (first byte)")),
                g = e,
                e = a[c++],
                e === t && q(Error("invalid uncompressed block header: LEN (second byte)")),
                g |= e << 8,
                e = a[c++],
                e === t && q(Error("invalid uncompressed block header: NLEN (first byte)")),
                k = e,
                e = a[c++],
                e === t && q(Error("invalid uncompressed block header: NLEN (second byte)")),
                k |= e << 8,
                g === ~k && q(Error("invalid uncompressed block header: length verify")),
                c + g > a.length && q(Error("input buffer is broken")),
                this.r) {
                case Xa:
                    for (; f + g > d.length; ) {
                        if (l = h - f,
                        g -= l,
                        B)
                            d.set(a.subarray(c, c + l), f),
                            f += l,
                            c += l;
                        else
                            for (; l--; )
                                d[f++] = a[c++];
                        this.b = f,
                        d = this.f(),
                        f = this.b
                    }
                    break;
                case Ia:
                    for (; f + g > d.length; )
                        d = this.f({
                            F: 2
                        });
                    break;
                default:
                    q(Error("invalid inflate mode"))
                }
                if (B)
                    d.set(a.subarray(c, c + g), f),
                    f += g,
                    c += g;
                else
                    for (; g--; )
                        d[f++] = a[c++];
                this.c = c,
                this.b = f,
                this.a = d;
                break;
            case 1:
                this.s(Za, $a);
                break;
            case 2:
                ab(this);
                break;
            default:
                q(Error("unknown BTYPE: " + b))
            }
        }
        return this.B()
    }
    ;
    var V, mb, bb = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], cb = B ? new Uint16Array(bb) : bb, db = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258], eb = B ? new Uint16Array(db) : db, fb = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0], gb = B ? new Uint8Array(fb) : fb, hb = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577], ib = B ? new Uint16Array(hb) : hb, jb = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], kb = B ? new Uint8Array(jb) : jb, lb = new (B ? Uint8Array : Array)(288);
    for (V = 0,
    mb = lb.length; mb > V; ++V)
        lb[V] = 143 >= V ? 8 : 255 >= V ? 9 : 279 >= V ? 7 : 8;
    var ob, qb, Za = ma(lb), nb = new (B ? Uint8Array : Array)(30);
    for (ob = 0,
    qb = nb.length; qb > ob; ++ob)
        nb[ob] = 5;
    var $a = ma(nb);
    T.prototype.s = function(b, a) {
        var c = this.a
          , d = this.b;
        this.C = b;
        for (var e, g, k, h, f = c.length - 258; 256 !== (e = rb(this, b)); )
            if (256 > e)
                d >= f && (this.b = d,
                c = this.f(),
                d = this.b),
                c[d++] = e;
            else
                for (g = e - 257,
                h = eb[g],
                0 < gb[g] && (h += U(this, gb[g])),
                e = rb(this, a),
                k = ib[e],
                0 < kb[e] && (k += U(this, kb[e])),
                d >= f && (this.b = d,
                c = this.f(),
                d = this.b); h--; )
                    c[d] = c[d++ - k];
        for (; 8 <= this.e; )
            this.e -= 8,
            this.c--;
        this.b = d
    }
    ,
    T.prototype.S = function(b, a) {
        var c = this.a
          , d = this.b;
        this.C = b;
        for (var e, g, k, h, f = c.length; 256 !== (e = rb(this, b)); )
            if (256 > e)
                d >= f && (c = this.f(),
                f = c.length),
                c[d++] = e;
            else
                for (g = e - 257,
                h = eb[g],
                0 < gb[g] && (h += U(this, gb[g])),
                e = rb(this, a),
                k = ib[e],
                0 < kb[e] && (k += U(this, kb[e])),
                d + h > f && (c = this.f(),
                f = c.length); h--; )
                    c[d] = c[d++ - k];
        for (; 8 <= this.e; )
            this.e -= 8,
            this.c--;
        this.b = d
    }
    ,
    T.prototype.f = function() {
        var c, d, b = new (B ? Uint8Array : Array)(this.b - 32768), a = this.b - 32768, f = this.a;
        if (B)
            b.set(f.subarray(32768, b.length));
        else
            for (c = 0,
            d = b.length; d > c; ++c)
                b[c] = f[c + 32768];
        if (this.p.push(b),
        this.u += b.length,
        B)
            f.set(f.subarray(a, a + 32768));
        else
            for (c = 0; 32768 > c; ++c)
                f[c] = f[a + c];
        return this.b = 32768,
        f
    }
    ,
    T.prototype.T = function(b) {
        var a, d, f, e, c = this.input.length / this.c + 1 | 0, g = this.input, k = this.a;
        return b && ("number" == typeof b.F && (c = b.F),
        "number" == typeof b.O && (c += b.O)),
        2 > c ? (d = (g.length - this.c) / this.C[2],
        e = 258 * (d / 2) | 0,
        f = e < k.length ? k.length + e : k.length << 1) : f = k.length * c,
        B ? (a = new Uint8Array(f),
        a.set(k)) : a = k,
        this.a = a
    }
    ,
    T.prototype.B = function() {
        var d, e, g, k, h, b = 0, a = this.a, c = this.p, f = new (B ? Uint8Array : Array)(this.u + (this.b - 32768));
        if (0 === c.length)
            return B ? this.a.subarray(32768, this.b) : this.a.slice(32768, this.b);
        for (e = 0,
        g = c.length; g > e; ++e)
            for (d = c[e],
            k = 0,
            h = d.length; h > k; ++k)
                f[b++] = d[k];
        for (e = 32768,
        g = this.b; g > e; ++e)
            f[b++] = a[e];
        return this.p = [],
        this.buffer = f
    }
    ,
    T.prototype.Q = function() {
        var b, a = this.b;
        return B ? this.L ? (b = new Uint8Array(a),
        b.set(this.a.subarray(0, a))) : b = this.a.subarray(0, a) : (this.a.length > a && (this.a.length = a),
        b = this.a),
        this.buffer = b
    }
    ,
    sb.prototype.W = function() {
        return this.D || this.h(),
        this.t.slice()
    }
    ,
    sb.prototype.h = function() {
        for (var b = this.input.length; this.c < b; ) {
            var a = new P
              , c = t
              , d = t
              , f = t
              , e = t
              , g = t
              , k = t
              , h = t
              , l = t
              , s = t
              , n = this.input
              , m = this.c;
            switch (a.G = n[m++],
            a.H = n[m++],
            (31 !== a.G || 139 !== a.H) && q(Error("invalid file signature:" + a.G + "," + a.H)),
            a.z = n[m++],
            a.z) {
            case 8:
                break;
            default:
                q(Error("unknown compression method: " + a.z))
            }
            if (a.n = n[m++],
            l = n[m++] | n[m++] << 8 | n[m++] << 16 | n[m++] << 24,
            a.Y = new Date(1e3 * l),
            a.ea = n[m++],
            a.da = n[m++],
            0 < (4 & a.n) && (a.$ = n[m++] | n[m++] << 8,
            m += a.$),
            0 < (a.n & Ea)) {
                for (h = [],
                k = 0; 0 < (g = n[m++]); )
                    h[k++] = String.fromCharCode(g);
                a.name = h.join("")
            }
            if (0 < (a.n & Fa)) {
                for (h = [],
                k = 0; 0 < (g = n[m++]); )
                    h[k++] = String.fromCharCode(g);
                a.A = h.join("")
            }
            0 < (a.n & Ga) && (a.R = 65535 & ja(n, 0, m),
            a.R !== (n[m++] | n[m++] << 8) && q(Error("invalid header crc16"))),
            c = n[n.length - 4] | n[n.length - 3] << 8 | n[n.length - 2] << 16 | n[n.length - 1] << 24,
            n.length - m - 4 - 4 < 512 * c && (e = c),
            d = new T(n,{
                index: m,
                bufferSize: e
            }),
            a.data = f = d.h(),
            m = d.c,
            a.ba = s = (n[m++] | n[m++] << 8 | n[m++] << 16 | n[m++] << 24) >>> 0,
            ja(f, t, t) !== s && q(Error("invalid CRC-32 checksum: 0x" + ja(f, t, t).toString(16) + " / 0x" + s.toString(16))),
            a.ca = c = (n[m++] | n[m++] << 8 | n[m++] << 16 | n[m++] << 24) >>> 0,
            (4294967295 & f.length) !== c && q(Error("invalid input size: " + (4294967295 & f.length) + " / " + c)),
            this.t.push(a),
            this.c = m
        }
        this.D = u;
        var r, v, y, p = this.t, x = 0, Q = 0;
        for (r = 0,
        v = p.length; v > r; ++r)
            Q += p[r].data.length;
        if (B)
            for (y = new Uint8Array(Q),
            r = 0; v > r; ++r)
                y.set(p[r].data, x),
                x += p[r].data.length;
        else {
            for (y = [],
            r = 0; v > r; ++r)
                y[r] = p[r].data;
            y = Array.prototype.concat.apply([], y)
        }
        return y
    }
    ,
    A("Zlib.Gunzip", sb),
    A("Zlib.Gunzip.prototype.decompress", sb.prototype.h),
    A("Zlib.Gunzip.prototype.getMembers", sb.prototype.W),
    ub.prototype.h = function() {
        var a, c, b = this.input;
        return a = this.K.h(),
        this.c = this.K.c,
        this.Z && (c = (b[this.c++] << 24 | b[this.c++] << 16 | b[this.c++] << 8 | b[this.c++]) >>> 0,
        c !== tb(a) && q(Error("invalid adler-32 checksum"))),
        a
    }
    ;
    var vb = 8
      , W = ra;
    wb.prototype.g = function() {
        var b, a, c, d, f, e, g, k = 0;
        switch (g = this.a,
        b = vb) {
        case vb:
            a = Math.LOG2E * Math.log(32768) - 8;
            break;
        default:
            q(Error("invalid compression method"))
        }
        switch (c = a << 4 | b,
        g[k++] = c,
        b) {
        case vb:
            switch (this.k) {
            case W.NONE:
                f = 0;
                break;
            case W.v:
                f = 1;
                break;
            case W.o:
                f = 2;
                break;
            default:
                q(Error("unsupported compression type"))
            }
            break;
        default:
            q(Error("invalid compression method"))
        }
        return d = f << 6 | 0,
        g[k++] = d | 31 - (256 * c + d) % 31,
        e = tb(this.input),
        this.J.b = k,
        g = this.J.g(),
        k = g.length,
        B && (g = new Uint8Array(g.buffer),
        g.length <= k + 4 && (this.a = new Uint8Array(g.length + 4),
        this.a.set(g),
        g = this.a),
        g = g.subarray(0, k + 4)),
        g[k++] = e >> 24 & 255,
        g[k++] = e >> 16 & 255,
        g[k++] = e >> 8 & 255,
        g[k++] = 255 & e,
        g
    }
    ,
    A("Zlib.Inflate", ub),
    A("Zlib.Inflate.prototype.decompress", ub.prototype.h),
    xb("Zlib.Inflate.BufferType", {
        ADAPTIVE: Ya.M,
        BLOCK: Ya.N
    }),
    A("Zlib.Deflate", wb),
    A("Zlib.Deflate.compress", function(b, a) {
        return new wb(b,a).g()
    }),
    A("Zlib.Deflate.prototype.compress", wb.prototype.g),
    xb("Zlib.Deflate.CompressionType", {
        NONE: W.NONE,
        FIXED: W.v,
        DYNAMIC: W.o
    })
}
).call(this),
function(factory) {
    "function" == typeof define && define.amd ? define(["jquery"], factory) : "object" == typeof exports ? module.exports = factory : factory(jQuery)
}(function($) {
    function handler(event) {
        var orgEvent = event || window.event
          , args = slice.call(arguments, 1)
          , delta = 0
          , deltaX = 0
          , deltaY = 0
          , absDelta = 0
          , offsetX = 0
          , offsetY = 0;
        if (event = $.event.fix(orgEvent),
        event.type = "mousewheel",
        "detail" in orgEvent && (deltaY = -1 * orgEvent.detail),
        "wheelDelta" in orgEvent && (deltaY = orgEvent.wheelDelta),
        "wheelDeltaY" in orgEvent && (deltaY = orgEvent.wheelDeltaY),
        "wheelDeltaX" in orgEvent && (deltaX = -1 * orgEvent.wheelDeltaX),
        "axis" in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS && (deltaX = -1 * deltaY,
        deltaY = 0),
        delta = 0 === deltaY ? deltaX : deltaY,
        "deltaY" in orgEvent && (deltaY = -1 * orgEvent.deltaY,
        delta = deltaY),
        "deltaX" in orgEvent && (deltaX = orgEvent.deltaX,
        0 === deltaY && (delta = -1 * deltaX)),
        0 !== deltaY || 0 !== deltaX) {
            if (1 === orgEvent.deltaMode) {
                var lineHeight = $.data(this, "mousewheel-line-height");
                delta *= lineHeight,
                deltaY *= lineHeight,
                deltaX *= lineHeight
            } else if (2 === orgEvent.deltaMode) {
                var pageHeight = $.data(this, "mousewheel-page-height");
                delta *= pageHeight,
                deltaY *= pageHeight,
                deltaX *= pageHeight
            }
            if (absDelta = Math.max(Math.abs(deltaY), Math.abs(deltaX)),
            (!lowestDelta || lowestDelta > absDelta) && (lowestDelta = absDelta,
            shouldAdjustOldDeltas(orgEvent, absDelta) && (lowestDelta /= 40)),
            shouldAdjustOldDeltas(orgEvent, absDelta) && (delta /= 40,
            deltaX /= 40,
            deltaY /= 40),
            delta = Math[delta >= 1 ? "floor" : "ceil"](delta / lowestDelta),
            deltaX = Math[deltaX >= 1 ? "floor" : "ceil"](deltaX / lowestDelta),
            deltaY = Math[deltaY >= 1 ? "floor" : "ceil"](deltaY / lowestDelta),
            special.settings.normalizeOffset && this.getBoundingClientRect) {
                var boundingRect = this.getBoundingClientRect();
                offsetX = event.clientX - boundingRect.left,
                offsetY = event.clientY - boundingRect.top
            }
            return event.deltaX = deltaX,
            event.deltaY = deltaY,
            event.deltaFactor = lowestDelta,
            event.offsetX = offsetX,
            event.offsetY = offsetY,
            event.deltaMode = 0,
            args.unshift(event, delta, deltaX, deltaY),
            nullLowestDeltaTimeout && clearTimeout(nullLowestDeltaTimeout),
            nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200),
            ($.event.dispatch || $.event.handle).apply(this, args)
        }
    }
    function nullLowestDelta() {
        lowestDelta = null 
    }
    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        return special.settings.adjustOldDeltas && "mousewheel" === orgEvent.type && absDelta % 120 === 0
    }
    var nullLowestDeltaTimeout, lowestDelta, toFix = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], toBind = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], slice = Array.prototype.slice;
    if ($.event.fixHooks)
        for (var i = toFix.length; i; )
            $.event.fixHooks[toFix[--i]] = $.event.mouseHooks;
    var special = $.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var i = toBind.length; i; )
                    this.addEventListener(toBind[--i], handler, !1);
            else
                this.onmousewheel = handler;
            $.data(this, "mousewheel-line-height", special.getLineHeight(this)),
            $.data(this, "mousewheel-page-height", special.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var i = toBind.length; i; )
                    this.removeEventListener(toBind[--i], handler, !1);
            else
                this.onmousewheel = null ;
            $.removeData(this, "mousewheel-line-height"),
            $.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(elem) {
            var $elem = $(elem)
              , $parent = $elem["offsetParent" in $.fn ? "offsetParent" : "parent"]();
            return $parent.length || ($parent = $("body")),
            parseInt($parent.css("fontSize"), 10) || parseInt($elem.css("fontSize"), 10) || 16
        },
        getPageHeight: function(elem) {
            return $(elem).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel")
        },
        unmousewheel: function(fn) {
            return this.unbind("mousewheel", fn)
        }
    })
});
//# sourceMappingURL=igv.min.map
